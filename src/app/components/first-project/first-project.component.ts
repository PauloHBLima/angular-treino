import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-project',
  templateUrl: './first-project.component.html',
  styleUrls: ['./first-project.component.scss']
})
export class FirstProjectComponent implements OnInit {
  name: string = "Paulo";
  age: number = 29;
  job: string = "Cadista";
  hoobies = ['futebol', 'estudar', 'jogar' ]

  constructor() {}

  ngOnInit(): void {
  }

}
