import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data-teste',
  templateUrl: './parent-data-teste.component.html',
  styleUrls: ['./parent-data-teste.component.scss']
})
export class ParentDataTesteComponent {

@Input() animesConhecidos!: {title: string, author: string, ear: number, personPrincipal: string }
}
