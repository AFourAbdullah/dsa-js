class Node {
  //every node has value and left right pointers in tree
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}
class BinarySearchTree {
  constructor() {
    //in bst we have a root pointer that is everything to begin
    this.root = null; //initially null since tree is empty
  }
  isEmpty() {
    return this.root == null;
  }
}

const bstree1 = new BinarySearchTree();
console.log("Tree is empty?", bstree1.isEmpty());
console.log(bstree1.root, "root");
