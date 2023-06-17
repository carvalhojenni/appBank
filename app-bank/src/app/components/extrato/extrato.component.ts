import { Component } from '@angular/core';
import { ServerService } from 'src/app/server.service';
import { format } from 'date-fns'

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent {
  constructor(public serverService : ServerService) { }
  ngOnInit(): void {
    this.serverService.getExtrato();
  }

}
