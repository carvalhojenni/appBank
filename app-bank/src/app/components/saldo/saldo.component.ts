import { Component } from '@angular/core';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent {
  hide = false;
  numberValue: string = '3.000,00';
  isClicked: boolean = false;

  toggleDiv() {
    this.isClicked = !this.isClicked;
    this.hide = true;
  }
}
