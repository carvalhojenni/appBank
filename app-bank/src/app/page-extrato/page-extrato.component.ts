import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-extrato',
  templateUrl: './page-extrato.component.html',
  styleUrls: ['./page-extrato.component.css']
})
export class PageExtratoComponent {

  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  close(){
    this.router.navigate(['home']);
  }
}
