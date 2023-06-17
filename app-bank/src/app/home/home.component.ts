import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';

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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dadosConta: dadosConta | undefined;

  constructor(private router: Router,
    private serverService : ServerService,) { }
  ngOnInit(): void {
    this.carregaDados();
  }

  transferir(){
    this.router.navigate(['transferir']);
  }

  async carregaDados(){
    this.dadosConta = await this.serverService.getDadosConta(this.serverService.cpf_origem);
  }
}
