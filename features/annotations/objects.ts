export {};

const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};


// while destructuring you have to write type annotation of the property
// from which you are destructuring in this case it is profile
const { age, name }: { age: number, name: string } = profile;
const { coords: { lat, lng } }: { coords: { lat: number, lng: number } } = profile;