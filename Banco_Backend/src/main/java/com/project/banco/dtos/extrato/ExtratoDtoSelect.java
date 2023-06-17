package com.project.banco.dtos.extrato;

import com.project.banco.models.Conta;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class ExtratoDtoSelect {
    String cliente_origem;
    Long cpf_origem;
    Integer agencia_origem;
    Integer conta_origem;
    String tipo_transacao;
    String cliente_destino;
    Long cpf_destino;
    Integer agencia_destino;
    Integer conta_destino;
    BigDecimal valor;
    String tipo_movimentacao;
    LocalDateTime data_transacao;


}
