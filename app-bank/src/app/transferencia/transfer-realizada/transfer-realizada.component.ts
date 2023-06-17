import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer-realizada',
  templateUrl: './transfer-realizada.component.html',
  styleUrls: ['./transfer-realizada.component.css']
})
export class TransferRealizadaComponent {
  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  close(){
    this.router.navigate(['home']);
  }
}
