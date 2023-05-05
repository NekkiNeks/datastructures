export default class LinkedList<T> {
  head: LinkedNode<T> | null = null;

  getLast() {
    if (!this.head) return null;

    let current = this.head;

    while (current) {
      if (!current.next) return current;
      current = current.next;
    }

    return null;
  }

  deleteHead() {
    if (!this.head) return null;
    const prevHead = this.head;
    this.head = this.head.next;
    return prevHead;
  }

  getLength(): number {
    let counter = 0;
    let current = this.head;

    while (current) {
      counter++;
      current = current.next;
    }

    return counter;
  }

  append(value: T) {
    const last = this.getLast();

    if (!last) {
      this.head = new LinkedNode(value);
    } else {
      last.next = new LinkedNode(value);
    }
  }

  prepend(value: T) {
    if (!this.head) {
      this.head = new LinkedNode(value);
    } else {
      const newNode = new LinkedNode(value);
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  delete(value: T) {
    let current = this.head;

    while (current) {
      if (current.next?.value === value) {
        current.next = current.next.next;
      }

      current = current.next;
    }
  }

  forEach(callback: (node: LinkedNode<T>) => void) {
    let current = this.head;

    while (current) {
      callback(current);
      current = current.next;
    }
  }
}

export class LinkedNode<T> {
  public value: T;
  public next: LinkedNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}
