// metadata - are the properties which can be tied to objects
// basically objects containing the details of the objects with which they are tied

import 'reflect-metadata';
import { isRegularExpressionLiteral } from 'typescript';

// const plane = {
//   color: 'red'
// };

// Reflect.defineMetadata('note', 'hi there', plane);
// Reflect.defineMetadata('height', 10, plane);

// console.log(plane);

// const note = Reflect.getMetadata('note', plane);

// console.log({note});

@controller
class Plane {

  color: string = 'red';

  @get('/login')
  fly(): void {
    console.log('vrrrrr');
  }

}

function get (path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('path', path, target, key);
  }
}

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key);
    const middleware = Reflect.getMetadata('middleware', target.prototype, key);
    // console.log({secret});

    // router.get(path, middleware, target.prototype[key]);
  }
}