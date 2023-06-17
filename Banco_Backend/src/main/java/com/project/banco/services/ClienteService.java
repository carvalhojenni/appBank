package com.project.banco.services;

import com.project.banco.dtos.BoolDTO;
import com.project.banco.interfaces.cliente.ClienteInterface;
import com.project.banco.models.Cliente;
import com.project.banco.repositories.ClienteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ClienteService implements ClienteInterface {

    private final ClienteRepository repository;

    @Override
    public BoolDTO loginByCpf(Long cpf, String senha) {
        if(!repository.existsByCpf(cpf)){
            return BoolDTO.builder().valida(false).build();
            //throw new RuntimeException("CPF inválido!");
        }
        else {
            if(repository.login(cpf, senha)) {
                return BoolDTO.builder().valida(true).build();
            }
            else {
                return BoolDTO.builder().valida(false).build();
                //throw new RuntimeException("Senha inválido!");
            }
        }
    }

    @Override
    public Cliente getClientByCpf(Long cpf) {
        if(!repository.existsByCpf(cpf)){
            //System.out.println("CPF inválido!");
            throw new RuntimeException("CPF inválido!");
        }
        else {
            return repository.findByCpf(cpf);
        }
    }

    @Override
    public BoolDTO existsByCpf(Long cpf) {
        if(!repository.existsByCpf(cpf)){
            return BoolDTO.builder().valida(false).build();
        }
        else {
            return BoolDTO.builder().valida(true).build();
        }
    }
}
