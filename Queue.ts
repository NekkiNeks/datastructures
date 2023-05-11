import LinkedList from "./linkedList";

export default class Queue<T> {
  list: LinkedList<T>;

  constructor() {
    this.list = new LinkedList();
  }

  enque(value: T) {
    this.list.append(value);
    return this;
  }

  deque(): T | null {
    const element = this.list.deleteHead();
    return element;
  }

  peek(): T | null {
    return this.list.head ? this.list.head.value : null;
  }

  isEmpty() {
    return !this.list.head;
  }

  forEach(callback: (value: T) => void) {
    this.list.forEach(callback);
  }
}
