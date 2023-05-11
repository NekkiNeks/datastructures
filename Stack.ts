import LinkedList from "./linkedList";

export default class Stack<T> {
  list: LinkedList<T>;

  constructor() {
    this.list = new LinkedList();
  }

  isEmpty() {
    return !this.list.head;
  }

  peek() {
    return this.list.getLast();
  }

  push(value: T) {
    this.list.append(value);
  }

  shift(): T | null {
    return this.list.deleteHead();
  }
}
