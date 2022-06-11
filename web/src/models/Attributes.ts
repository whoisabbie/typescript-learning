export class Attributes<T> {

  constructor(private data: T ) {}

  // #1 below K was previously number | string that was knows as type union
  // means we are going to return either number or a string
  // now we are using generics in class methods as well, below is the example
  // #2 below arrow functions are used to bound this to only access Attributes instance, and not any other
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: T): void {
    Object.assign(this.data, update);
  };

  getAll(): T {
    return this.data;
  }

}