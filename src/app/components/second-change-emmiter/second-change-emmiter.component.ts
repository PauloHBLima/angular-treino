import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second-change-emmiter',
  templateUrl: './second-change-emmiter.component.html',
  styleUrls: ['./second-change-emmiter.component.scss']
})
export class SecondChangeEmmiterComponent implements OnInit {

@Output() changeEventEmmiter : EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }
  constructor() {}


  handleNumber(): void {
    this.changeEventEmmiter.emit() //aqui está emitindo, porém ninguem está pegando essa emissão.
  }
}
