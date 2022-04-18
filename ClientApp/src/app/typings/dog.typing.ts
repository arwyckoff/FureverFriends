export interface Dog {
  name: string;
  id: number;
  breed: string;
  dateOfBirth: string;
  interests: string;
  description: string;
  location: string;
  imageURL: string;
  sizeId: number;
}

export enum Size {
  NULL = 1,
  XS = 2,
  S = 3,
  M = 4,
  L = 5,
  XL = 6
}