import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.scss']
})
export class ChangeNumberComponent implements OnInit {

  @Output() tradeNumber: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor() { }
  handleClick(){
    this.tradeNumber.emit();
  }
}
