package com.project.banco.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Conta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cliente_cpf", referencedColumnName = "cpf")
    Cliente titular;

    @Column(nullable = false)
    Integer agencia;

    @Column(nullable = false, unique = true)
    Integer conta;

    @Column(nullable = false)
    String senha;

    @Column(nullable = false)
    BigDecimal saldo;

}
