import { Pipe, PipeTransform } from '@angular/core';
import { FriendshipType } from '../typings/friendship.typing';

@Pipe({name: 'appFriendShipTypeText'})
export class FriendShipTypePipe implements PipeTransform {
    labelObject = {
        [FriendshipType.PLAYMATES]: 'Playmates',
        [FriendshipType.LOVERS]: 'Lovers',
        [FriendshipType.FRENEMIES]: 'Frenemies',
        [FriendshipType.ARCHRIVALS]: 'Archrivals',
        [FriendshipType.ACQUAINTANCES]: 'Acquaintances'
    }

    transform(typeId: FriendshipType): string {
        return this.labelObject[typeId];
    }
}