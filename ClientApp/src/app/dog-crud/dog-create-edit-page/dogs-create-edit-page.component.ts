import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Dog } from 'src/app/typings/dog.typing';
import { DogCrudService } from '../dog-crud.service';

@Component({
  selector: 'app-dogs-create-edit-page',
  templateUrl: './dogs-create-edit-page.component.html',
  styleUrls: ['./dogs-create-edit-page.component.scss']
})
export class DogCreateEditPageComponent implements OnInit {
  dogId: number|string = '';
  formGroup: FormGroup;
  dog: Dog = null;
  header: string = '';
  buttonText: string = '';
  existingDog: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dogCrudService: DogCrudService
  ) { }

  get isNew () {
    const retVal = this.dogId === 'new';

    this.existingDog = retVal ? false : true;

    return retVal;
  }

  async ngOnInit() {
    this.dogId = this.activatedRoute.snapshot.params.id;
    
    await this.handleFormGroup();
  }

  private async handleFormGroup() {
    if (this.isNew) {
      this.header = 'Adding New Dog!';
      this.buttonText = 'Add';

      this.formGroup = this.formBuilder.group({
        name: '',
        breed: '',
        description: '',
        dateOfBirth: '',
        location: '',
        interests: '',
        size: ''
      });
    } else {
      const dog = await this.dogCrudService.getDog(this.dogId as number);

      this.header = 'Editing ' + dog.name + '!';
      this.buttonText = 'Update';
      
      this.formGroup = this.formBuilder.group({
        name: dog.name,
        breed: dog.breed,
        description: dog.description,
        dateOfBirth: dog.dateOfBirth,
        location: dog.location,
        interests: dog.interests,
        size: dog.sizeId
      });
    }
  }

  handleCreateEdit () {
    const dog = this.formGroup.value as Dog;

    this.dogCrudService.createOrUpdateDog(dog);

    if (!this.existingDog){
      this.existingDog = true;

      this.header = 'Editing ' + dog.name + '!';
      this.buttonText = 'Update';
    }
  }
}
