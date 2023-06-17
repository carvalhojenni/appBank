package com.project.banco.interfaces.conta;

import com.project.banco.dtos.RealizaTransf;
import com.project.banco.dtos.ResumoTransferencia;
import com.project.banco.dtos.extrato.ExtratoDtoSelect;
import com.project.banco.dtos.extrato.ExtratoDtoInsert;
import com.project.banco.models.Conta;
import com.project.banco.models.Extrato;

import java.math.BigDecimal;
import java.util.List;

public interface ContaInterface {
    Conta getContaByCpf(Long cpf);
    ResumoTransferencia resumoTransferencia(Long cpfOrigem, Long cpfDestino, BigDecimal valor);
    boolean realizaTransferencia(RealizaTransf transf);
    List<ExtratoDtoSelect> geraExtratoByCpf(Long cpf);
}
