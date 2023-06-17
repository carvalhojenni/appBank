package com.project.banco.controllers;

import com.project.banco.dtos.RealizaTransf;
import com.project.banco.dtos.ResumoTransferencia;
import com.project.banco.dtos.extrato.ExtratoDtoSelect;
import com.project.banco.interfaces.conta.ContaInterface;
import com.project.banco.models.Conta;
import com.project.banco.models.Extrato;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RequestMapping("conta")
@CrossOrigin(origins = "*")
@RestController
@RequiredArgsConstructor
public class ContaController {

    private final ContaInterface conta;

    @GetMapping("cpf={cpf}")
    @ResponseStatus(HttpStatus.OK)
    public Conta getConta(@PathVariable Long cpf){ return this.conta.getContaByCpf(cpf); }

    @GetMapping("origem={cpf_origem}&destino={cpf_destino}&valor={valor}")
    @ResponseStatus(HttpStatus.OK)
    public ResumoTransferencia getResumo(@PathVariable Long cpf_origem, @PathVariable Long cpf_destino, @PathVariable BigDecimal valor){
        return this.conta.resumoTransferencia(cpf_origem, cpf_destino, valor);
    }

    @PostMapping("transferir")
    @ResponseStatus(HttpStatus.OK)
    public void postTransf(@RequestBody RealizaTransf transf){
        this.conta.realizaTransferencia(transf);
    }

    @GetMapping("extrato/cpf={cpf}")
    @ResponseStatus(HttpStatus.OK)
    public List<ExtratoDtoSelect> getExtrato(@PathVariable Long cpf){
        return this.conta.geraExtratoByCpf(cpf);
    }
}
