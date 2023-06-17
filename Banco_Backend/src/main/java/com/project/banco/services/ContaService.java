package com.project.banco.services;

import com.project.banco.dtos.RealizaTransf;
import com.project.banco.dtos.ResumoTransferencia;
import com.project.banco.dtos.extrato.ExtratoDtoInsert;
import com.project.banco.dtos.extrato.ExtratoDtoSelect;
import com.project.banco.interfaces.conta.ContaInterface;
import com.project.banco.models.Conta;
import com.project.banco.models.Extrato;
import com.project.banco.repositories.ContaRepository;
import com.project.banco.repositories.ExtratoRepository;
import lombok.Builder;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.*;

@Service
@RequiredArgsConstructor
public class ContaService implements ContaInterface {

    private final ContaRepository repositoryConta;
    private final ExtratoRepository repositoryExtrato;

    @Override
    public Conta getContaByCpf(Long cpf) {
        if(!repositoryConta.existsByCpf(cpf)){
            System.out.println("CPF inválido!");
            throw new RuntimeException("CPF inválido!");
        }
        else {
            return repositoryConta.findByCpf(cpf);
        }
    }

    @Override
    public ResumoTransferencia resumoTransferencia(Long cpfOrigem, Long cpfDestino, BigDecimal valor) {
        Conta contaOrigem = repositoryConta.findByCpf(cpfOrigem);

        if(!repositoryConta.existsByCpf(cpfOrigem)){
            throw new RuntimeException("CPF Origem inválido!");
        }
        else if(!repositoryConta.existsByCpf(cpfDestino)){
            throw new RuntimeException("CPF Destino inválido!");
        }
        else if(valor.equals(BigDecimal.ZERO)){
            throw new RuntimeException("Transferêcia não pode ser de valor 0!");
        }
        else if(contaOrigem.getSaldo().compareTo(valor) == -1){
            throw new RuntimeException("Você não tem saldo suficiente!");
        }
        else {
            ResumoTransferencia resumo = ResumoTransferencia.builder()
                    .idOrigem(repositoryConta.getId(cpfOrigem))
                    .idDestino(repositoryConta.getId(cpfDestino))
                    .cliente_destino(repositoryConta.getNome(cpfDestino))
                    .cpf_destino(cpfDestino)
                    .valor(valor)
                    .build();
            return resumo;
        }
    }

    @Override
    public boolean realizaTransferencia(RealizaTransf transf) {
        Conta contaOrigem = repositoryConta.findById(transf.getIdOrigem()).get();
        Conta contaDestino = repositoryConta.findById(transf.getIdDestino()).get();
        Extrato transferencia = Extrato.builder()
                .origem(Conta.builder().id(transf.getIdOrigem()).build())
                .destino(Conta.builder().id(transf.getIdDestino()).build())
                .tipo_transacao("pix")
                .valor(transf.getValor())
                .data(LocalDateTime.now())
                .build();

        contaOrigem.setSaldo(contaOrigem.getSaldo().subtract(transf.getValor()));
        contaDestino.setSaldo(contaDestino.getSaldo().add(transf.getValor()));

        repositoryConta.save(contaOrigem);
        repositoryConta.save(contaDestino);
        repositoryExtrato.save(transferencia);
        return true;
    }

    @Override
    public List<ExtratoDtoSelect> geraExtratoByCpf(Long cpf) {
        List<ExtratoDtoSelect> listaExtrato = new ArrayList<>();
        
        if(repositoryExtrato.findAll().stream().count() > 0){
            repositoryExtrato.findAll().stream().filter(ex -> ex.getOrigem().getTitular().getCpf().equals(cpf) || ex.getDestino().getTitular().getCpf().equals(cpf)).forEach(ex -> {
                listaExtrato.add(ExtratoDtoSelect.builder()
                                .cliente_origem(ex.getOrigem().getTitular().getNome_completo())
                                .cliente_destino(ex.getDestino().getTitular().getNome_completo())
                                .cpf_origem(ex.getOrigem().getTitular().getCpf())
                                .cpf_destino(ex.getDestino().getTitular().getCpf())
                                .agencia_origem(ex.getOrigem().getAgencia())
                                .agencia_destino(ex.getDestino().getAgencia())
                                .conta_origem(ex.getOrigem().getConta())
                                .conta_destino(ex.getDestino().getConta())
                                .valor(ex.getValor())
                                .data_transacao(ex.getData())
                                .tipo_transacao("pix")
                                .tipo_movimentacao(ex.getOrigem().getTitular().getCpf().equals(cpf) ? "saída" : "entrada")
                                .build());
                System.out.println(listaExtrato);
            });
        }
        Collections.reverse(listaExtrato);
        return listaExtrato;
    }
}
