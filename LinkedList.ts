export default class LinkedList<T> {
  head: LinkedNode<T> | null = null;

  private getLastNode(): LinkedNode<T> | null {
    if (!this.head) return null;

    let current = this.head;

    while (current) {
      if (!current.next) return current;
      current = current.next;
    }

    return null;
  }

  getLast(): T | null {
    const lastNode = this.getLastNode();
    return lastNode ? lastNode.value : null;
  }

  deleteHead(): T | null {
    if (!this.head) return null;
    const prevHead = this.head;
    this.head = this.head.next;
    return prevHead.value;
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

  append(value: T): void {
    const last = this.getLastNode();

    if (!last) {
      this.head = new LinkedNode(value);
    } else {
      last.next = new LinkedNode(value);
    }
  }

  prepend(value: T): void {
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

  forEach(callback: (value: T) => void) {
    let current = this.head;

    while (current) {
      callback(current.value);
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
