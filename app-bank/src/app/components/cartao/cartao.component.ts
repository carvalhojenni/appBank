import { Component } from '@angular/core';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css']
})
export class CartaoComponent {
  isHovered: boolean = false;

  changeDiv() {
    this.isHovered = true;
  }

  resetDiv() {
    this.isHovered = false;
  }
}
