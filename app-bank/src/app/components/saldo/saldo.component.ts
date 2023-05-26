import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent {
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

  extrato(){
    this.router.navigate(['page-extrato'])
  }

}
