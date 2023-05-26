import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  cpf!: string;
  senha!: string ;
  showErrorModal = false;

  // example = new FormGroup({
  //   cpf: new FormControl('', Validators.required),
  //   senha: new FormControl('', Validators.required)

  // });
 constructor(private router: Router) { }
  ngOnInit(): void {
  }

  // onSubmit(): void {
  //   console.log(this.example.value);
  //   this.router.navigate(['home']);
  // }

  submitForm() {
    if (this.cpf || this.senha) {
      this.showErrorModal = true;
    } else {
      // Lógica para enviar o formulário
      this.router.navigate(['home']);
      console.log('Formulário enviado:', this.cpf, this.senha);
    }
  }

  closeModal() {
    this.showErrorModal = false;
  }



}

