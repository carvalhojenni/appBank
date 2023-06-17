import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { ValorComponent } from './transferencia/valor/valor.component';
import { ContatoTransferirComponent } from './transferencia/contato-transferir/contato-transferir.component';
import { PageExtratoComponent } from './page-extrato/page-extrato.component';
import { ResumoComponent } from './transferencia/resumo/resumo.component';
import { SenhaComponent } from './transferencia/senha/senha.component';
import { TransferRealizadaComponent } from './transferencia/transfer-realizada/transfer-realizada.component';

const routes: Routes = [
  // {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'transferir', component: TransferenciaComponent},
  {path:'valor', component: ValorComponent},
  {path: 'contato-transferir', component: ContatoTransferirComponent},
  {path: 'page-extrato', component: PageExtratoComponent},
  {path:'resumo', component: ResumoComponent},
  {path:'senha', component: SenhaComponent},
  {path:'traferencia-realizada', component: TransferRealizadaComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
