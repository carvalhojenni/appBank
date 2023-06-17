import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

interface valida{
  valida: boolean;
}

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

interface resumo{
  idOrigem: number,
  idDestino: number,
  cliente_destino: string,
  cpf_destino: number,
  valor: number
}

interface transferencia {
  idOrigem: number,
  idDestino: number,
  valor: number
}

interface extrato {
  cliente_origem: string,
  cpf_origem: number,
  agencia_origem: number,
  conta_origem: number,
  tipo_transacao: string,
  cliente_destino: string,
  cpf_destino: number,
  agencia_destino: number,
  conta_destino: number,
  valor: number,
  tipo_movimentacao: string,
  data_transacao: string
}

@Injectable({
  providedIn: 'root'
})


export class ServerService {
  dadosConta: dadosConta | undefined;
  resumo: resumo | undefined;
  valida: valida | undefined;
  cpf_origem!: string;
  cpf_destino!: string;
  valorTransf!: number;
  extrato: extrato[] | undefined;
  baseUrl = 'http://localhost:8080/';
  transferencia: transferencia | undefined;

  constructor(private httpClient: HttpClient) {

  }

  async EfetuaLogin(cpf: string, senha:string){
    this.valida = await this.httpClient.get<any>(this.baseUrl + "cliente/cpf="+ cpf + "&senha=" + senha).toPromise();
    console.log('valida: ' + this.valida?.valida);
    this.cpf_origem = cpf;
    console.log("cpf origem: " + this.cpf_origem)
    return this.valida?.valida
  }

  async getDadosConta(cpf: string){
    this.dadosConta = await this.httpClient.get<any>(this.baseUrl + "conta/cpf="+ cpf).toPromise();
    console.log(this.dadosConta?.id)
    console.log(this.dadosConta?.titular)
    console.log(this.dadosConta?.agencia)
    console.log(this.dadosConta?.conta)
    console.log(this.dadosConta?.senha)
    console.log(this.dadosConta?.saldo)
    return this.dadosConta;
  }

  async verificaCpf(cpf:string){
    this.valida = await this.httpClient.get<any>(this.baseUrl + "cliente/dados/user/cpf="+ cpf).toPromise();
    console.log("Destino existe: " + this.valida?.valida);
    this.cpf_destino = cpf;
    return this.valida?.valida;
  }

  async resumoTransf(){
    this.resumo = await this.httpClient.get<any>(this.baseUrl + "conta/origem="+ this.cpf_origem + "&destino=" + this.cpf_destino + "&valor=" + this.valorTransf).toPromise();
    console.log(this.resumo?.idOrigem);
    console.log(this.resumo?.idDestino);
    console.log(this.resumo?.cliente_destino);
    console.log(this.resumo?.cpf_destino);
    console.log(this.resumo?.valor);
    this.transferencia = {
      idOrigem: Number(this.resumo?.idOrigem),
      idDestino: Number(this.resumo?.idDestino),
      valor: Number(this.resumo?.valor)
    }
  }

  realizaTransf(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    console.log(this.transferencia)
    this.httpClient.post<any>(this.baseUrl + "conta/transferir", this.transferencia, {headers}).toPromise();
  }

  async getExtrato(){
    this.extrato = await this.httpClient.get<any>(this.baseUrl + "conta/extrato/cpf="+ this.cpf_origem).toPromise();
    console.log(this.extrato);
  }

}
