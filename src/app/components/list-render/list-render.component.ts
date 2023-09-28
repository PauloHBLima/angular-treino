import { ListService } from './../../services/list.service';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [];

  animal: Animal = {
    name: 'Teste',
    type: 'Algo',
    age: 12,
  }

  animalDetails = ''


  constructor(private listService: ListService) {
    this.getAnimals();
  }

  ngOnInit(): void {}

  showAge(animal: Animal) {
    this.animalDetails = `O Pet ${animal.name} tem ${animal.age} anos!`
  }

  removeAnimal(animal: Animal) {
    console.log('removendo animal');
    this.animals = this.listService.remove(this.animals, animal)
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}

