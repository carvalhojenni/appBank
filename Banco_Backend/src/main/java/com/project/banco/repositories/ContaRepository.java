package com.project.banco.repositories;

import com.project.banco.dtos.extrato.ExtratoDtoSelect;
import com.project.banco.models.Conta;
import com.project.banco.models.Extrato;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContaRepository extends JpaRepository<Conta, Long> {

    @Query(value = "SELECT CASE WHEN QTD > 0 THEN \'true\' ELSE \'false\' end " +
            "FROM (SELECT COUNT(*) AS QTD FROM conta WHERE cliente_cpf = :cpf) a", nativeQuery = true)
    boolean existsByCpf(@Param("cpf") Long cpf);

    @Query(value = "SELECT * FROM conta WHERE cliente_cpf = :cpf", nativeQuery = true)
    Conta findByCpf(@Param("cpf") Long cpf);

    //@Query(value = "CALL gera_extrato_cpf(:cpf)", nativeQuery = true)
    //List<ExtratoDtoSelect> geraExtratoByCpf(@Param("cpf") Long cpf);


    @Query(value = "SELECT cli.nome_completo FROM conta cc INNER JOIN cliente cli ON cli.id = cc.id WHERE cc.cliente_cpf = :cpf", nativeQuery = true)
    String getNome(@Param("cpf") Long cpf);

    @Query(value = "SELECT cc.agencia FROM conta cc INNER JOIN cliente cli ON cli.id = cc.id WHERE cc.cliente_cpf = :cpf", nativeQuery = true)
    Integer getAgencia(@Param("cpf") Long cpf);

    @Query(value = "SELECT cc.conta FROM conta cc INNER JOIN cliente cli ON cli.id = cc.id WHERE cc.cliente_cpf = :cpf", nativeQuery = true)
    Integer getConta(@Param("cpf") Long cpf);

    @Query(value = "SELECT cc.id FROM conta cc INNER JOIN cliente cli ON cli.id = cc.id WHERE cc.cliente_cpf = :cpf", nativeQuery = true)
    Long getId(@Param("cpf") Long cpf);
}
