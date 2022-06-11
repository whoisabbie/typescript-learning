import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

export class Collection<T, K> {

  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(
    public rootUrl: string,
    public deserialize: (json: K) => T
  ) {}

  // why we haven't used shortened passthrough method syntax
  // because it would only work if our instances are generated in consturctor params
  get on() {
    return this.events.on;
  }

  // why we haven't used shortened passthrough method syntax
  // because it would only work if our instances are generated in consturctor params
  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl)
      .then((response: AxiosResponse) => {
        response.data.forEach((value: K) => {
          this.models.push(this.deserialize(value));
        });

        this.trigger('change');
      });
  }

}