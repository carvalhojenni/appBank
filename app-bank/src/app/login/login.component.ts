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

  example = new FormGroup({
    cpf: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required)

  });
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.example.value);
    this.router.navigate(['home']);
  }

}

