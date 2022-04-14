import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dogs-create-edit-page',
  templateUrl: './dogs-create-edit-page.component.html',
  styleUrls: ['./dogs-create-edit-page.component.scss']
})
export class DogCreateEditPageComponent implements OnInit {
  dogId: number|string = '';
  formGroup: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  get isNew () {
    return this.dogId === 'new';
  }

  async ngOnInit() { 
    this.dogId = this.activatedRoute.snapshot.params.id;
    // If not new, fetch dog detail and use to populate this form group
    this.formGroup = this.formBuilder.group({
      name: '',
      breed: ''
    });
  }
}
