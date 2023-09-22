import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  newCarros = {
    marca: 'Ford',
    name: 'Corsa',
    ano: 2023
  }
  userName = 'Paulo Henrique';
  title = 'angular-treino';
  userMaster = 'Paulinho'

  animes = {
    title: 'One Piece',
    author: 'Oda',
    ear: 2023,
    personPrincipal: 'Monkey D.Luffy'
  }
}
