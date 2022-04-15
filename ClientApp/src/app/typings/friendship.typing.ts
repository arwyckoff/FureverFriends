export interface Friendship {
    dogOneID: number;
    dogOneName: string;
    dogTwoID: number;
    dogTwoName: string;
    friendshipType: string;
    dateAdded: Date;
  }

export enum FriendshipType {
  PLAYMATES = 1,
  LOVERS = 2,
  FRENEMIES = 3,
  ARCHRIVALS = 4,
  ACQUAINTANCES = 5
}