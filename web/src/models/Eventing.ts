// the below syntax is known as type alias
type Callback = () => void;

export class Eventing {

  events: { [key: string]: Callback[] } = {};

  // below arrow functions are used to bound this to only access Eventing instance, and not any other
  on = (eventName: string, callback: Callback): void => {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  // below arrow functions are used to bound this to only access Eventing instance, and not any other
  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];
    
    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach(callback => {
      callback();
    });
  };

}