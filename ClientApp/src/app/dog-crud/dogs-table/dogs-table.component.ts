import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dog } from 'src/app/typings/dog.typing';

@Component({
  selector: 'app-dogs-table',
  templateUrl: './dogs-table.component.html',
  styleUrls: ['./dogs-table.component.scss']
})
export class DogsTableComponent implements OnInit {
  @Input() dogs: Dog[] = [];

  constructor(private router: Router) {  }

  ngOnInit(): void { }

  handleNavigateToCreateEdit (dogId: number|string) {
    this.router.navigate(['dogs/' + dogId]);
  }
}
