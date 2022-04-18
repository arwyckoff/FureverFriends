import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DogCrudService } from 'src/app/dog-crud/dog-crud.service';
import { Dog } from 'src/app/typings/dog.typing';
import { Friendship } from 'src/app/typings/friendship.typing';
import { FindFriendsService } from '../find-friends.service';

@Component({
  selector: 'app-friends-component',
  templateUrl: './friends-page.component.html',
  styleUrls: ['./friends-page.component.scss']
})
export class FriendsPageComponent implements OnInit {
    friendships: Friendship[] = [];
    dog: Dog = null;
    dogId: number;
    formGroup: FormGroup;

   constructor(
      private findFriendsService: FindFriendsService, 
      private activatedRoute: ActivatedRoute,
      private formBuilder: FormBuilder,
      private dogCrudService: DogCrudService,
      private router: Router
      ) { }

  async ngOnInit() {
    this.dogId = this.activatedRoute.snapshot.params.id;
    this.dog = await this.dogCrudService.getDog(this.dogId);
    this.friendships = await this.GetFriends();
    this.formGroup = this.formBuilder.group({term: ''});
  }

  async GetFriends() {
      const returnVal = await this.findFriendsService.getFriend(this.dogId);
      return returnVal;
  }

  handleNavigateToCreateEdit (id: number|string) {
    this.router.navigate(['friends/' + id]);
  }
}
