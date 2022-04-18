import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DogCrudService } from 'src/app/dog-crud/dog-crud.service';
import { Dog, Size } from 'src/app/typings/dog.typing';
import { Friendship, FriendshipType } from 'src/app/typings/friendship.typing';
import { FindFriendsService } from '../find-friends.service';

@Component({
  selector: 'app-friend-create-edit-page',
  templateUrl: './friend-create-edit-page.component.html',
  styleUrls: ['./friend-create-edit-page.component.scss']
})
export class FriendCreateEditPageComponent implements OnInit {
  friendId: number|string = '';
  dogId: number;
  formGroup: FormGroup;
  dog: Dog = null;
  header: string = '';
  buttonText: string = '';
  existingFriend: boolean = false;
  Size = Size;
  dogs: Dog[] = [];
  friendshipTypes: {} = {};
  friendship: Friendship = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dogCrudService: DogCrudService,
    private findFriendsService: FindFriendsService
  ) { }

  get isNew () {
    const retVal = this.friendId === 'new';

    this.existingFriend = retVal ? false : true;

    return retVal;
  }

  async ngOnInit() {
    this.friendId = this.activatedRoute.snapshot.params.id;
    this.dogId = this.activatedRoute.snapshot.params.dog_id;
    
    await this.handleFormGroup();
  }

  private async handleFormGroup() {
    this.dog = await this.dogCrudService.getDog(this.dogId);

    this.dogs = await this.dogCrudService.getDogs();
    
    this.dogs = this.dogs.filter(x => x.id != this.dogId);

    for (const friendshipType in FriendshipType) {
      if (isNaN(Number(friendshipType))) {
        this.friendshipTypes[FriendshipType[friendshipType]] = friendshipType[0].toUpperCase() + friendshipType.slice(1).toLowerCase();
      }
    }
    
    if (this.isNew) {
      this.header = 'Adding New Friend for ' + this.dog.name + '!';
      this.buttonText = 'Add';

      this.formGroup = this.formBuilder.group({
        name: '',
        friendship: ''
      });
    } else {
      this.header = 'Editing ' + this.dog.name + '\'s Friend!';
      this.buttonText = 'Update';

      const friendships = await this.findFriendsService.getFriend(this.dogId);

      this.friendship = friendships.find(x => x.id == this.friendId);
      
      this.formGroup = this.formBuilder.group({
        name: this.friendship.dogOneId == this.dogId ? this.friendship.dogTwoId : this.friendship.dogOneId,
        friendship: this.friendship.friendshipTypeId
      });
    }
  }

  handleCreateEdit () {
    let friend: Friendship;
    
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear()
    var todayString = mm + '/' + dd + '/' + yyyy;

    if (!this.existingFriend){
      friend = {
        friendshipTypeId: this.formGroup.value.friendship,
        dateAdded: '',
        dogOneId: this.dogId,
        dogOneName: this.dog.name,
        dogTwoId: this.formGroup.value.name,
        dogTwoName: this.dogs.filter(x => x.id == this.formGroup.value.name)[0].name,
        id: 0
      };

      this.existingFriend = true;

      this.header = 'Editing ' + this.dog.name + '\'s Friend!';
      this.buttonText = 'Update';

      alert('Adding new Frinedship for ' + this.dog.name + ' and ' + this.dogs.filter(x => x.id == this.formGroup.value.name)[0].name);
    }
    else{
      friend = {
        friendshipTypeId: this.formGroup.value.friendship,
        dateAdded: '',
        dogOneId: this.dogId,
        dogOneName: this.dog.name,
        dogTwoId: this.formGroup.value.name,
        dogTwoName: this.dogs.filter(x => x.id == this.formGroup.value.name)[0].name,
        id: this.friendId as number
      };

      alert('Editing Frinedship for ' + this.dog.name + ' and ' + this.dogs.filter(x => x.id == this.formGroup.value.name)[0].name);
    }

    //this.findFriendsService.createOrUpdateFriend(friend);
  }

  handleDelete () {
    alert('Deleting Frinedship with Id ' + this.friendId);
    //this.findFriendsService.deleteFriend(this.friendId as number);
  }
}
