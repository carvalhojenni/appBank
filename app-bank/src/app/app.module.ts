import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule } from 'ngx-mask';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SaldoComponent } from './components/saldo/saldo.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CartaoComponent } from './components/cartao/cartao.component';
import { ExtratoComponent } from './components/extrato/extrato.component';
import {MatDialogModule } from '@angular/material/dialog';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { ContatoTransferirComponent } from './contato-transferir/contato-transferir.component';
import { PageExtratoComponent } from './page-extrato/page-extrato.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SaldoComponent,
    CarouselComponent,
    CartaoComponent,
    ExtratoComponent,
    TransferenciaComponent,
    ContatoTransferirComponent,
    PageExtratoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
