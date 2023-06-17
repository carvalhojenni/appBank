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
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.css']
})
export class ResumoComponent {
  dadosConta: dadosConta | undefined;

  constructor(private router: Router,
  public serverService : ServerService) { }
  ngOnInit(): void {
    this.serverService.resumoTransf();
    this.carregaDados();
  }

  home(){
    this.router.navigate(['home']);
  }
  async carregaDados(){
    this.dadosConta = await this.serverService.getDadosConta(this.serverService.cpf_origem);
  }

  close(){
    this.router.navigate(['contato-transferir']);
  }

  resumoTransferencia(){
    this.router.navigate(['senha'])
  }
}
