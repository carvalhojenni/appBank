package com.project.banco.repositories;

import com.project.banco.models.Cliente;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClienteRepository extends CrudRepository<Cliente, Long> {
    boolean existsByCpf(Long cpf);
    Cliente findByCpf(Long cpf);

    @Query(value = "SELECT CASE WHEN QTD > 0 THEN \'true\' ELSE \'false\' end " +
            "FROM (SELECT COUNT(*) AS QTD FROM cliente WHERE cpf = :cpf and senha = :senha) a", nativeQuery = true)
    boolean login(@Param("cpf") Long cpf, @Param("senha") String senha);
}
