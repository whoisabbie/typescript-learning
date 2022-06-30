import 'reflect-metadata';
import { MetadataKeys } from './Metadatakeys';
import { RequestHandler } from 'express';

export function use(middleware: RequestHandler) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target, key) || [];

    // middlewares.push(middleware); see line no 13

    Reflect.defineMetadata(
      MetadataKeys.middleware, 
      [...middlewares, middleware], 
      target, 
      key
    );
  }
}