export interface Dog {
  name: string;
  id: number;
  breed: Breed;
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