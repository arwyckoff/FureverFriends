export interface Dog {
  name: string;
  id: number;
  breed: Breed;
  dateOfBirth: string;
  interests: string;
  description: string;
  location: string;
  imageURL: string;
  sizeId: number;
}

export enum Breed {
  MUTT = 1,
  POODLE = 2,
  GOLDEN_RETRIEVER = 3,
  LAB = 4,
  DALMATION = 5,
  PIT_BULL = 6,
  HUSKY = 7,
  GERMAN_SHEPHERD = 8,
  AUSTRALIAN_SHEPHERD = 9
}

export enum Size {
  NULL = 1,
  XS = 2,
  S = 3,
  M = 4,
  L = 5,
  XL = 6
}