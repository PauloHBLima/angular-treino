import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.scss']
})
export class ParentDataComponent {
@Input() adminTeste: string = '';
@Input() name: string = 'Paulo';
@Input() registerCarros!: {marca: string, name: string, ano: number  }

}
