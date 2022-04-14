import { Injectable } from '@angular/core';
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
}