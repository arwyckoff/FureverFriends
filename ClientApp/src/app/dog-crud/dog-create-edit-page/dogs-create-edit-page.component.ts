import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Dog, Size } from 'src/app/typings/dog.typing';
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
  Size = Size;

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
        sizeId: ''
      });
    } else {
      const dog = await this.dogCrudService.getDog(this.dogId as number);

      this.header = 'Editing ' + dog.name + '!';
      this.buttonText = 'Update';
      
      this.formGroup = this.formBuilder.group({
        id: dog.id,
        name: dog.name,
        breed: dog.breed,
        description: dog.description,
        dateOfBirth: dog.dateOfBirth,
        location: dog.location,
        interests: dog.interests,
        sizeId: dog.sizeId
      });
    }
  }

  handleCreateEdit () {
    const dog: Dog = this.formGroup.value;

    this.dogCrudService.createOrUpdateDog(dog);

    if (!this.existingDog){
      this.existingDog = true;

      this.header = 'Editing ' + dog.name + '!';
      this.buttonText = 'Update';
    }
  }
}
