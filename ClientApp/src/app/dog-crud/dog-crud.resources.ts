import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dog } from '../typings/dog.typing';

@Injectable({
  providedIn: 'root'
})
export class DogCrudResources {
  constructor (
    private http: HttpClient
  ) {}

  getDogs () {
    return this.http.get<Dog[]>('DogCrud/GetDogs').toPromise();
  }

  getDog (id: number) {
    return this.http.get<Dog>('DogCrud/GetDog?Id=' + id).toPromise();
  }
}