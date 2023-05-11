import { TreeNode } from "./Tree";

enum compareResult {
  LESS,
  EQUAL,
  MORE,
}

class BinaryTreeNode<T> extends TreeNode<T> {
  left: BinaryTreeNode<T> | null = null;
  right: BinaryTreeNode<T> | null = null;

  private compare(value: T) {
    if (value > this.value) return compareResult.MORE;
    if (value < this.value) return compareResult.LESS;
    return compareResult.EQUAL;
  }

  setLeft(node: BinaryTreeNode<T>): BinaryTreeNode<T> {
    node.setParent(this);
    this.left = node;
    return node;
  }

  setRight(node: BinaryTreeNode<T>): BinaryTreeNode<T> {
    node.setParent(this);
    this.right = node;
    return node;
  }

  insert(value: T): BinaryTreeNode<T> {
    switch (this.compare(value)) {
      case compareResult.LESS: {
        if (this.left) return this.left.insert(value);
        return this.setLeft(new BinaryTreeNode(value));
      }
      case compareResult.MORE: {
        if (this.right) return this.right.insert(value);
        return this.setRight(new BinaryTreeNode(value));
      }
      case compareResult.EQUAL: {
        // Равные не обрабатываются. TODO: Обработка дубликатов.
        return this;
      }
    }
  }
}
