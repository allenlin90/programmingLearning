type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[] } = {};

  on = (eventName: string, callback: Callback): void => {
    const handlers = this.events[eventName] || []; // assign an empty array if this.events[eventName] is undefined
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];

    if (!handlers || !handlers.length) return;

    handlers.forEach((callback) => {
      callback();
    });
  };
}
