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
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent {
  hide = false;
  dadosConta: dadosConta | undefined;
  numberValue: number | undefined;
  isClicked: boolean = false;

  constructor(private router: Router,
    private serverService : ServerService) { }
  ngOnInit(): void {
    this.recebeSaldo();
  }
  toggleDiv() {
    this.isClicked = !this.isClicked;
    this.hide = true;
  }

  extrato(){
    this.router.navigate(['page-extrato'])
  }

  async recebeSaldo(){
    this.dadosConta = await this.serverService.getDadosConta(this.serverService.cpf_origem);
    this.numberValue = this.dadosConta?.saldo;
    console.log(this.numberValue)
  }


}
