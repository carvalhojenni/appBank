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
  selector: 'app-valor',
  templateUrl: './valor.component.html',
  styleUrls: ['./valor.component.css']
})
export class ValorComponent {
  valido!: string;
  hide = false;
  dadosConta: dadosConta | undefined;
  numberValue: number | undefined;
  isClicked: boolean = false;
  errorMessage! : string;
  errorModal = false;

  constructor(private router: Router,
    private serverService : ServerService) { }
  ngOnInit(): void {
    this.recebeSaldo();
  }


  async recebeSaldo(){
    this.dadosConta = await this.serverService.getDadosConta(this.serverService.cpf_origem);
    this.numberValue = this.dadosConta?.saldo;
    console.log(this.numberValue)
  }

  toggleDiv() {
    this.isClicked = !this.isClicked;
    this.hide = true;
  }

  close(){
    this.router.navigate(['home']);
  }

  valorTransferencia(){
    console.log("valido: " + this.valido);
    console.log("saldo: " + this.numberValue);
    if(Number(this.valido.replace('R$','')) > Number(this.numberValue)){
      this.errorModal = true;
      this.errorMessage = 'Você não tem saldo suficiente';
    }else{
      this.serverService.valorTransf = Number(this.valido.replace('R$',''));
      this.router.navigate(['contato-transferir'])
    }
  }

  closeErrorModal() {
    this.errorModal = false;
  }
}
