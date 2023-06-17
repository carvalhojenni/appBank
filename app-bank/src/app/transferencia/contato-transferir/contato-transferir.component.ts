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
  selector: 'app-contato-transferir',
  templateUrl: './contato-transferir.component.html',
  styleUrls: ['./contato-transferir.component.css']
})
export class ContatoTransferirComponent {
  contato!: string;
  errorMessage! : string;
  errorModal = false;
  dadosConta: dadosConta | undefined;

  constructor(private router: Router,
    private serverService : ServerService) { }
  ngOnInit(): void {
    this.carregaDados();
  }

  home(){
    this.router.navigate(['home']);
  }

  close(){
    this.router.navigate(['transferir']);
  }

  async carregaDados(){
    this.dadosConta = await this.serverService.getDadosConta(this.serverService.cpf_origem);
  }
  async contatoTranferencia(){
    if(this.contato.length < 14){
      this.errorModal = true;
      this.errorMessage = 'CPF é obrigatórios.';
    }
    else if(await this.serverService.verificaCpf(this.contato.replace('.','').replace('-','').replace('.',''))){
      this.router.navigate(['resumo'])
    }
    else {
      this.errorModal = true;
      this.errorMessage = 'CPF não encontrado.';
    }

  }

  closeErrorModal() {
    this.errorModal = false;
  }

}
