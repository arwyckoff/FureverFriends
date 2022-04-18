export interface Friendship {
    dogOneId: number;
    dogOneName: string;
    dogTwoId: number;
    dogTwoName: string;
    friendshipTypeId: number;
    dateAdded: string;
    id: number
  }

export enum FriendshipType {
  PLAYMATES = 1,
  LOVERS = 2,
  FRENEMIES = 3,
  ARCHRIVALS = 4,
  ACQUAINTANCES = 5
}