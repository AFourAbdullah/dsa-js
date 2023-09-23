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
  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode; //to make sure that new node is root node is tree has no nodes or is empty
    } else {
      //this will be start by comparing new node's value with root and if value<root then we will go to left or root else right of root and then so on if there are both left and right nodes alread present then we will compare values once again
      //for example to insert 3
      //we have a tree whic is         10
      //                             /    \
      //                            5      15
      //so 3 position will be       /
      //                            3
      //now we wil make use of recursion by a function that takes root node of tree and new node as args the root argument mean the root of main tree as well as the root of subtree
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, newnode) {
    if (newnode.value < root.value) {
      if (root.left == null) {
        root.left = newnode;
      } else {
        this.insertNode(root.left, newnode);
      }
    } else {
      if (root.right == null) {
        root.right = newnode;
      } else {
        this.insertNode(root.right, newnode);
      }
    }
  }
}

const bstree1 = new BinarySearchTree();
console.log("Tree is empty?", bstree1.isEmpty());
console.log(bstree1.root, "root");
