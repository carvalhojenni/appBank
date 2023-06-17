package com.project.banco.dtos.extrato;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.hibernate.validator.constraints.br.CPF;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
public class ExtratoDtoInsert {
    @CPF(message = "O CPF Origem não é válido!")
    @NotNull(message = "O CPF Origem não pode ser nulo!")
    @NotEmpty(message = "O CPF Origem não pode ficar em branco!")
    Long origem_cpf;

    @NotNull(message = "O tipo de transação não pode ser nulo!")
    @NotEmpty(message = "O tipo de transação não pode ficar em branco!")
    String tipo_transacao;

    @CPF(message = "O CPF Destino não é válido!")
    @NotNull(message = "O CPF Destino não pode ser nulo!")
    @NotEmpty(message = "O CPF Destino não pode ficar em branco!")
    Long destino_cpf;

    @NotNull(message = "O valor não pode ser nulo!")
    @NotEmpty(message = "O valor não pode ficar em branco!")
    BigDecimal valor;

    @NotNull(message = "A data não pode ser nula!")
    @NotEmpty(message = "A data não pode ficar em brancp!")
    LocalDateTime data;
}
