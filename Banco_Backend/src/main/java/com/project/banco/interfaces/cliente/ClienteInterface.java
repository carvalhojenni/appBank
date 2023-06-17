package com.project.banco.interfaces.cliente;


import com.project.banco.dtos.BoolDTO;
import com.project.banco.models.Cliente;

public interface ClienteInterface {
    BoolDTO loginByCpf(Long cpf, String senha);
    Cliente getClientByCpf(Long cpf);
    BoolDTO existsByCpf(Long cpf);
}
