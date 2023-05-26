import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato-transferir',
  templateUrl: './contato-transferir.component.html',
  styleUrls: ['./contato-transferir.component.css']
})
export class ContatoTransferirComponent {
  contato!: string;
  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  close(){
    this.router.navigate(['home']);
  }

  valorTransferencia(){
    this.router.navigate(['contato-transferir'])
  }

}
