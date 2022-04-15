import { Injectable } from '@angular/core';
import { Dog } from '../typings/dog.typing';
import { DogCrudResources } from './dog-crud.resources';

@Injectable({
  providedIn: 'root'
})
export class DogCrudService {

  constructor (
    private dogCrudResources: DogCrudResources
  ) {

  }

  async getDogs () {
    try {
      const data = await this.dogCrudResources.getDogs();
  
      return data;
    } catch (e) {
      console.error(e);


      return [];
    }
  }

  async getDog (id: number) {
    try {
      const data = await this.dogCrudResources.getDog(id);
  
      return data;
    } catch (e) {
      console.error(e);


      return null;
    }
  }

  async createOrUpdateDog (dog: Dog) {
    try {
      const data = await this.dogCrudResources.createOrUpdateDog(dog);
  
      return data;
    } catch (e) {
      console.error(e);


      return null;
    }
  }
}