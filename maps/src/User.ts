import faker from 'faker';
import { Mappable } from './CustomMap';

// every time we'll created instance of class User
// and if that class won't be having the same vars and methods as Interface Mappable
// it'll throw error here itself
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red'

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`
  }

}