export interface Friendship {
    dogOneID: number;
    dogOneName: string;
    dogTwoID: number;
    dogTwoName: string;
    friendshipTypeId: number;
    dateAdded: Date;
    id: number
  }

export enum FriendshipType {
  PLAYMATES = 1,
  LOVERS = 2,
  FRENEMIES = 3,
  ARCHRIVALS = 4,
  ACQUAINTANCES = 5
}