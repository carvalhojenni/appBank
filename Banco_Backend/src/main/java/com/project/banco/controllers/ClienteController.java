package com.project.banco.controllers;

import com.project.banco.dtos.BoolDTO;
import com.project.banco.interfaces.cliente.ClienteInterface;
import com.project.banco.models.Cliente;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RequestMapping("cliente")
@CrossOrigin(origins = "*")
@RestController
@RequiredArgsConstructor
public class ClienteController {

    private final ClienteInterface cliente;

    @GetMapping("cpf={cpf}&senha={senha}")
    @ResponseStatus(HttpStatus.OK)
    public BoolDTO login(@PathVariable Long cpf, @PathVariable String senha){ return this.cliente.loginByCpf(cpf, senha); }

    @GetMapping("dados/cpf={cpf}")
    @ResponseStatus(HttpStatus.OK)
    public Cliente getDados(@PathVariable Long cpf){ return this.cliente.getClientByCpf(cpf); }

    @GetMapping("dados/user/cpf={cpf}")
    @ResponseStatus(HttpStatus.OK)
    public BoolDTO existeUsuario(@PathVariable Long cpf){ return this.cliente.existsByCpf(cpf); }

}
