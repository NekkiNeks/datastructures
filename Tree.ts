import Queue from "./Queue";

export class TreeNode<T> {
  height: number;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
  parent: TreeNode<T> | null;
  value: T;

  constructor(value: T) {
    this.left = null;
    this.right = null;
    this.parent = null;
    this.value = value;
    this.height = 0;
  }

  setParent(node: TreeNode<T>) {
    this.parent = node;
    this.height = node.height + 1;
  }

  setLeft(node: TreeNode<T>) {
    node.setParent(this);
    this.left = node;
  }

  setRight(node: TreeNode<T>) {
    node.setParent(this);
    this.right = node;
  }

  getHeight(): number {
    const leftHeight = this.left ? this.left.getHeight() : 0;
    const rightHeight = this.right ? this.right.getHeight() : 0;

    return 1 + Math.max(leftHeight, rightHeight);
  }

  traverseDeep(callback: (value: T) => void) {
    callback(this.value);
    if (this.left) this.left.traverseDeep(callback);
    if (this.right) this.right.traverseDeep(callback);
  }

  traverseWide(callback: (value: T) => void) {
    const queue = new Queue<TreeNode<T>>();

    queue.enque(this);

    while (!queue.isEmpty()) {
      const node = queue.deque();
      if (!node) break;
      callback(node.value);

      if (node.left) queue.enque(node.left);
      if (node.right) queue.enque(node.right);
    }
  }
}
