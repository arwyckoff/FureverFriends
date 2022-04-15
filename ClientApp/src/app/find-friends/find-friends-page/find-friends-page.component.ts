import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Dog } from 'src/app/typings/dog.typing';
import { FindFriendsService } from '../find-friends.service';

@Component({
  selector: 'app-find-friends-component',
  templateUrl: './find-friends-page.component.html',
  styleUrls: ['./find-friends-page.component.scss']
})
export class FindFriendsPageComponent implements OnInit {
  dogs: any;
  formGroup: FormGroup;
  searchResult: Dog[];
  ready: boolean = false;

   constructor(private findFriendsService: FindFriendsService, 
      private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({term: ''});
  }

  async getSearch() {
    const term = this.formGroup.value.term;

    this.searchResult = await this.findFriendsService.getSearch(term);
    this.ready = true;
    return this.searchResult;
  }
}
