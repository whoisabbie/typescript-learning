// Decorators in Typescript
// What are decorators in ts - function that can be used to modify/update different properties/methods in class
// Not the same as Javascript decorators
// Used inside/on classes only - tightly coupled with class
// decorators can be applied to class and it's properties, accessors, methods
// decorators can be applied static methods, static properties, static accessors as well

// Decorators are only executed when we define a class (not when instance is created)

@classDecorator
class Boat {

  // property
  @testDecorator
  color: string = 'red';

  // accessor
  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  // method
  @logError('Something bad!')
  pilot(
    // below parameterDecorator is a decorator applied on a method's parameter
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('nothing');
    }
  }

}

// class decorators take only one arg i.e. constructor of that class
// type of constructor can be Function or typeof (instance of class)
function classDecorator(constructor: Function | typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log({key});
  console.log({index})
}

function testDecorator(target: any, key: string) {
  // console.log(target.color); 
  // above will return undefined
  // the prototype inside js generally always stores methods NOT INSTANCE PROPERTIES
  // properties gets define under constructor

  console.log(key)
}


// here logError is decorator factory
// decoratory factory is just a function that wraps and returns another function
function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    // above property descriptors are objects to change the values of objects which are passed in arguments
    const method = desc.value;
  
    desc.value = function() {
      try {
        method()
      } catch (err) {
        console.log(errorMessage);
      }
    }
  }
  
}

// new Boat().pilot();