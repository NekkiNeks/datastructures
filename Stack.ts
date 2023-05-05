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

  push(item: T) {
    this.list.append(item);
  }

  shift() {
    const head = this.list.head;
    if (head) this.list.deleteHead();
    return head;
  }
}
