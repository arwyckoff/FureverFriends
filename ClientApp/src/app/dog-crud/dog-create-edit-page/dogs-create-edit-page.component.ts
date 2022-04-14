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
  createOrEditHeader: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    if (this.isNew){
      this.createOrEditHeader = ''
    }
  }

  get isNew () {
    return this.dogId === 'new';
  }

  async ngOnInit() { 
    this.dogId = this.activatedRoute.snapshot.params.id;

    if (!this.isNew){
      this.formGroup = this.formBuilder.group({
        name: 'B',
        breed: ''
      });
    } else{
      this.formGroup = this.formBuilder.group({
        name: 'A',
        breed: ''
      });
    }
  }
}
