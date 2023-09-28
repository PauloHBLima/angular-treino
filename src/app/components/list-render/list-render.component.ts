import { ListService } from './../../services/list.service';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    { name: 'Bob', type: 'Dog', age: 4 },
    { name: 'Nilica', type: 'Cadela', age: 6 },
    { name: 'Wilson', type: 'Cat', age: 8 },
    { name: 'Monster', type: 'Leon', age: 12 },
  ]

  animal: Animal = {
    name: 'Teste',
    type: 'Algo',
    age: 12,
  }

  animalDetails = ''


  constructor(private listService: ListService) {}

  ngOnInit(): void {}

  showAge(animal: Animal) {
    this.animalDetails = `O Pet ${animal.name} tem ${animal.age} anos!`
  }

  removeAnimal(animal: Animal) {
    console.log('removendo animal');
    this.animals = this.listService.remove(this.animals, animal)
  }
}
