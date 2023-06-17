import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from 'src/app/server.service';

interface dadosConta {
  id: number,
  titular: titular,
  agencia: number,
  conta: number,
  senha: string,
  saldo: number
}

interface titular {
  id: number,
  cpf: number,
  nome_completo: string,
  senha: string
}

@Component({
  selector: 'app-senha',
  templateUrl: './senha.component.html',
  styleUrls: ['./senha.component.css'],
})
export class SenhaComponent {
  senha2: string = '';
  errorMessage! : string;
  errorModal = false;
  dadosConta: dadosConta | undefined;

  constructor(private router: Router,
    private serverService : ServerService, ) { }


  ngOnInit(): void {
    this.carregaDados();
  }

  home(){
    this.router.navigate(['home']);
  }

  close(){
    this.router.navigate(['resumo']);
  }

  async carregaDados(){
    this.dadosConta = await this.serverService.getDadosConta(this.serverService.cpf_origem);
  }

  senhaTransferencia(){
    console.log("rodou")
    console.log("senha:" + this.senha2)
     if(this.senha2.length < 4){
        this.errorModal = true;
        this.errorMessage = 'Senha de 4 digitos obrigatoria.';
        console.log("rodou2")
      }
    else if(Number(this.serverService.dadosConta?.senha) == Number(this.senha2)){
      this.serverService.realizaTransf();
      this.router.navigate(['traferencia-realizada'])
    }
    else {
      this.errorModal = true;
      this.errorMessage = 'Senha não inválida.';
    }
  }


  closeErrorModal() {
    this.errorModal = false;
  }


}

