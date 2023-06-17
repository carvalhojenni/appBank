package com.project.banco.dtos;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class ResumoTransferencia {
    Long idOrigem;
    Long idDestino;
    String cliente_destino;
    Long cpf_destino;
    BigDecimal valor;
}
