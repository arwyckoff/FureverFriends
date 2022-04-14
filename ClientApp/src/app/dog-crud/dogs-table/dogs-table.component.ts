import { Component, Input, OnInit, Output } from '@angular/core';
import { Dog } from 'src/app/typings/dog.typing';

@Component({
  selector: 'app-dogs-table',
  templateUrl: './dogs-table.component.html',
  styleUrls: ['./dogs-table.component.scss']
})
export class DogsTableComponent implements OnInit {
  @Input() dogs: Dog[] = [];
  constructor() { }
  ngOnInit(): void { }
}
