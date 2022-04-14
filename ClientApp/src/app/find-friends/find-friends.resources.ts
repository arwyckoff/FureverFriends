import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dog } from '../typings/dog.typing';

@Injectable({
  providedIn: 'root'
})
export class FindFriendsResources {
  constructor(
    private http: HttpClient
  ) {}

  getSearch(term: string) {
    return this.http.post<Dog[]>(`DogCrud/SearchDogs?term=${term}`, {term}).toPromise();
  }
}