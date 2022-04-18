import { Injectable } from '@angular/core';
import { Friendship } from '../typings/friendship.typing';
import { FindFriendsResources } from './find-friends.resources';

@Injectable({
  providedIn: 'root'
})
export class FindFriendsService {

  constructor (
    private findFriendsResources: FindFriendsResources
  ) {}

  async getSearch(term: string) {
    try {
      const data = await this.findFriendsResources.getSearch(term);

      return data;
    } catch (e) {
      console.error(e);

    return [];
    }
  }

  async getFriend(dogId: number)
  {
      try {
        const data = await this.findFriendsResources.getFriends(dogId);

        return data;
      } catch (e) {
        console.error(e);
  
      return [];
      }
  }

  async deleteFriend(friendId: number)
  {
      try {
        const data = await this.findFriendsResources.deleteFriend(friendId);

        return data;
      } catch (e) {
        console.error(e);
  
      return null;
      }
  }

  async createOrUpdateFriend(friendship: Friendship)
  {
      try {
        const data = await this.findFriendsResources.createOrUpdateFriend(friendship);

        return data;
      } catch (e) {
        console.error(e);
  
      return null;
      }
  }
}