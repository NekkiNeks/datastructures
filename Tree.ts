import Queue from "./Queue";

class Tree<T> {
  constructor(public root: TreeNode<T>) {}
}

class TreeNode<T> {
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
}

function getTreeHeight(rootNode: TreeNode<any>): number {
  const leftHeight = rootNode.left ? getTreeHeight(rootNode.left) : 0;
  const rightHeight = rootNode.right ? getTreeHeight(rootNode.right) : 0;

  return 1 + Math.max(leftHeight, rightHeight);
}

function traverseDeep<T>(
  rootNode: TreeNode<T>,
  callback: (node: TreeNode<T>) => void
) {
  callback(rootNode);

  if (rootNode.left) traverseDeep(rootNode.left, callback);
  if (rootNode.right) traverseDeep(rootNode.right, callback);
}

function traverseWide<T>(
  rootNode: TreeNode<T>,
  callback: (item: TreeNode<T>) => void
) {
  const queue = new Queue<typeof rootNode>();

  queue.enque(rootNode);

  while (!queue.isEmpty()) {
    const node = queue.deque();
    if (!node) break;
    callback(node.value);
    if (node.value.left) queue.enque(node.value.left);
    if (node.value.right) queue.enque(node.value.right);
  }
}

const tree = new Tree<string>(new TreeNode("root"));
tree.root.setLeft(new TreeNode("root-left"));
tree.root.setRight(new TreeNode("root-right"));
tree.root.left!.setLeft(new TreeNode("root-left-left"));
tree.root.left!.setRight(new TreeNode("root-left-right"));
tree.root.right!.setLeft(new TreeNode("root-right-left"));
tree.root.right!.setRight(new TreeNode("root-right-right"));

traverseDeep(tree.root, (node) => console.log(node.value));
traverseWide(tree.root, (node) => console.log(node.value));
