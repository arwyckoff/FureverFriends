import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dogs-create-edit-page',
  templateUrl: './dogs-create-edit-page.component.html',
  styleUrls: ['./dogs-create-edit-page.component.scss']
})
export class DogCreateEditPageComponent implements OnInit {
  dogId: number|string = '';

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void { 
    this.dogId = this.activatedRoute.snapshot.params.id;
  }
}
