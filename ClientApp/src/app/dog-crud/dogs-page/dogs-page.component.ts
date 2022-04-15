
import { Component, OnInit } from '@angular/core';
import { Dog } from 'src/app/typings/dog.typing';
import { DogCrudService } from '../dog-crud.service';

@Component({
  selector: 'app-dogs-page',
  templateUrl: './dogs-page.component.html',
  styleUrls: ['./dogs-page.component.scss']
})
export class DogsPageComponent implements OnInit {
  dogs: Dog[] = [];
  ready: boolean = false;
  constructor(
    private dogCrudService: DogCrudService
  ) { }

  async ngOnInit() {
    this.dogs = await this.dogCrudService.getDogs();
    this.ready = true;
   }
}
