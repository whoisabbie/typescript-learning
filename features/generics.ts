class ArrayOfNumbers {

  constructor(public collection: number) {}

  get(index: number): number {
    return this.collection[index];
  }

}

class ArrayOfStrings {

  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }

}

// below T is generic where above we defined two class
// in which first was for array of numbers and
// second one was for array of strings
// we wrote two different classes due to change of type in data even though functionality was same
// but by just using generic now this below class would work for both the types numbers and strings
class ArrayOfAnything<T> {

  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }

}

// Example of generics with functions

function printStrings(arr: string[]): void {
  for (let i: number = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i: number = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i: number = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

printAnything<string>(['a', 'b', 'c']);

// Generic Constraints

class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

interface Printable {
  print(): void
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i: number = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Car>([new Car(), new Car()]);