import LinkedList from "./linkedList";
import { LinkedNode } from "./linkedList";

export default class Queue<T> {
  list: LinkedList<T>;

  constructor() {
    this.list = new LinkedList();
  }

  enque(value: T) {
    this.list.append(value);
    return this;
  }

  deque() {
    return this.list.deleteHead();
  }

  peek() {
    return this.list.head;
  }

  isEmpty() {
    return !this.list.head;
  }

  forEach(callback: (node: LinkedNode<T>) => void) {
    this.list.forEach(callback);
  }
}
