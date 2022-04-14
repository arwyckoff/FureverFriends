
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dog } from 'src/app/typings/dog.typing';
import { DogCrudService } from '../dog-crud.service';

@Component({
  selector: 'app-dogs-page',
  templateUrl: './dogs-page.component.html',
  styleUrls: ['./dogs-page.component.scss']
})
export class DogsPageComponent implements OnInit {
  dogs: Dog[] = [];
  constructor(
    private dogCrudService: DogCrudService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.dogs = await this.dogCrudService.getDogs();
   }

  handleNavigateToCreateEdit (dogId: number|string) {
    this.router.navigate(['dogs/' + dogId]);
  }
}