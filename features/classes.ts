// difference between ts class and es2015 js class
// modifiers are present in ts (public, private, protected)
// public - method can be called anytime, anywhere
// private - this method can be called by other method in class
// protected - this method can be called by other method in class or by other methods in child classes
// by default all the methods and etc are considered to be public
// modifiers can be assigned to methods as well as fields or properties

class Vehicle {
  // public drive(): void {
  //   console.log('chuga chuga');
  // }

  // below color is known as fields
  // color: string;
  // color: string = 'red';

  // constructor is instantly executed as soon as an instance of class is created
  // constructor(color: string) {
  //   this.color = color;
  // }

  // or line 14 to 20 can be writter as below, the color was getting repeated many times in above example
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

// can pass color in args while creating instance like this
// if we pass any argument to the class, we must define constructor in class
const vehilce = new Vehicle('orange');
console.log(vehilce.color);

// extends just copied the menthod of the class from which we are extending
class Car extends Vehicle {

  // if constructor is not available in the child class, parent classes contructor will be automatically called
  // we didn't write public before color because we don't want color to be created in child, we want to pass it to parent
  constructor(public wheels: number, color: string) {
    // the word/keyword super here is reference of super class/ parent class
    // whenever we call the constructor of child class we require to call the constructor of parent class as well
    super(color);
  }

  // overriding drive method of parent class
  // if we are ever overriding the method in child class we cannot override modifiers
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red');
car.startDrivingProcess();