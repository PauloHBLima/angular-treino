import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste-events',
  templateUrl: './teste-events.component.html',
  styleUrls: ['./teste-events.component.scss']
})
export class TesteEventsComponent implements OnInit {

  amigo : boolean = false;

  ngOnInit(): void {}
  constructor() {}

  handleChangeAmigo() : void {
    this.amigo = !this.amigo
  }
}
