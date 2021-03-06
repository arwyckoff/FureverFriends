import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dog } from '../typings/dog.typing';
import { Friendship } from '../typings/friendship.typing';

@Injectable({
  providedIn: 'root'
})
export class FindFriendsResources {
  constructor(
    private http: HttpClient
  ) {}

  getSearch(term: string) {
    return this.http.post<Dog[]>(`DogCrud/SearchDogs?term=${term}`, {term}).toPromise();
  }

  getFriends(dogId: number) {
    return this.http.get<Friendship[]>('FriendshipCrud/GetFriendshipsForDog?dogId=' + dogId).toPromise();
  }

  deleteFriend(friendId: number) {
    return this.http.post<number>('FriendshipCrud/DeleteFriendship?FriendshipId=' + friendId, null).toPromise();
  }

  createOrUpdateFriend(friendship: Friendship) {
    return this.http.post<Friendship>('FriendshipCrud/CreateEditFriendship', friendship).toPromise();
  }
}