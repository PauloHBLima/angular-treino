import { Injectable } from '@angular/core';
import { Animal } from '../components/Animal';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl =  'http://localhost:3000/animals';


  constructor(private http: HttpClient) { } //o método HttpClient da a condição de poder trabalhar com os métodos get, put , etc...

  remove(animals: Animal[], animal: Animal) {
    return animals.filter((a) => animal.name !== a.name)
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl)
  }
}
