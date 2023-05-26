import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { ContatoTransferirComponent } from './contato-transferir/contato-transferir.component';
import { PageExtratoComponent } from './page-extrato/page-extrato.component';

const routes: Routes = [
  // {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'transferir', component: TransferenciaComponent},
  {path: 'contato-transferir', component: ContatoTransferirComponent},
  {path: 'page-extrato', component: PageExtratoComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
