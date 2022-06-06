// npm install @types/node is required to use this below lib in ts
// with that package all the annotation for all packages under node would
// be available
import fs from 'fs';

// here TypeOfData ia a Generic in typescript
// generic is basically a type where we want to pass dynamic types while 
// creating an instance of a class
// TypeOfData just come as an argument to this class
// as function gets argument class gets TypeOfData generic as an argument only
// the TypeOfData is passed while creating instance of this class
// Usually when writing generics it is written in single letter only
// T = TypeOfData
export abstract class CsvFileReader<T> {

  data: T[] = [];

  constructor (public filename: string) {}

  // this below is use of abstract methods
  // abstract methods are those which are defined 
  // under child class
  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
    .readFileSync(this.filename, {
      encoding: 'utf-8'
    })
    .split('\n')
    .map((row: string): string[] => {
      return row.split(',')
    })
    .map(this.mapRow);
  }

}