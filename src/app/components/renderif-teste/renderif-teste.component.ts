import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-renderif-teste',
  templateUrl: './renderif-teste.component.html',
  styleUrls: ['./renderif-teste.component.scss']
})
export class RenderifTesteComponent implements OnInit{


  name: boolean = true;
  newName: string = 'Wagner';

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor(){}
}
