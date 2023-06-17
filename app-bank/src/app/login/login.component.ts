import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  errorMessage! : string;
  errorModal = false;
  cpf: string = '';
  senha: string = '';

 constructor(
  private router: Router,
  private serverService : ServerService,
  ) { }

  ngOnInit(): void {
  }

  async submitForm() {
    console.log(this.cpf.length+ '   ' + this.senha.length)

    if(this.cpf.length < 14 || this.senha.length < 6){
      this.errorModal = true;
      this.errorMessage = 'CPF e senha são obrigatórios.';
    }
    else if(await this.serverService.EfetuaLogin(this.cpf.replaceAll('.','').replaceAll('-',''), this.senha )){
      this.router.navigate(['home']);
    }
    else {
      this.errorModal = true;
      this.errorMessage = 'CPF ou senha estão incorretos.';
    }
  }

  closeErrorModal() {
    this.errorModal = false;
  }

}

