import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent {
  valido! : string;
  hide = false;
  numberValue: string = '3.000,00';
  isClicked: boolean = false;

  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  toggleDiv() {
    this.isClicked = !this.isClicked;
    this.hide = true;
  }

  close(){
    this.router.navigate(['home']);
  }

  valorTransferencia(){
    this.router.navigate(['contato-transferir'])
  }

}
