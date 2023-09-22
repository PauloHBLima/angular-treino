import { Component } from '@angular/core';

@Component({
  selector: 'app-father-change-emmiter',
  templateUrl: './father-change-emmiter.component.html',
  styleUrls: ['./father-change-emmiter.component.scss']
})
export class FatherChangeEmmiterComponent {

  numberStart : number = 0;

  onChangeEventEmmiter() {
    this.numberStart = Math.floor(Math.random() * 20);
  }
}
