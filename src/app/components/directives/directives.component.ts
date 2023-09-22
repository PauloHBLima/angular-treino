import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

ngOnInit(): void {
}
constructor(){}

  size = 50;
  color = 'blue';
  fontFamily = 'helvetica';


}
