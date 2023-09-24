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
  search(root, value) {
    if (!root) {
      return false;
    } else {
      //here we will do following
      // first we will see if root node has that value
      // if root donot has that value then we will compare value to root node value if value<root.value we will go to left subtree of root node and then compare value with root node of that subtree and so on //
      // if root donot has that value then we will compare value to root node value if value>root.value we will go to right subtree of root node and then compare value with root node of that subtree and so on //
      if (root.value == value) {
        return `The searched value is present and it is: ${root.value}`;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }
  postorder(root) {
    if (root) {
      this.postorder(root.left);
      this.postorder(root.right);
      console.log(root.value);
    }
  }
  breadthFirstSearch() {
    const q = [];
    q.push(this.root);
    while (q.length !== 0) {
      let curr = q.shift();
      console.log(curr.value);
      if (curr.left) {
        q.push(curr.left);
      }
      if (curr.right) {
        q.push(curr.right);
      }
    }
  }

  //in breadth first search we make use of queue
  // first we enque root node dequue to read its value and enque left node of root node and right node of root node and repeat the same
  // root is 10 q=[10] deque 10 and read it and enquue its left then righ
  // q1=[5,15] //now repeat same steps for 5
  // // 5 is dequed and it is read then we add its left 3 and righht 7 to q1
  // q1=[15,3,7]
  // continue until all nodes are traversed and if there are no child nodes for any node no need to enqueue that node's children b/c they don't exist
  //so to sum up in bfs we traverse all nodes at a level then move on to next level
}

const bstree1 = new BinarySearchTree();
console.log("Tree is empty?", bstree1.isEmpty());
console.log(bstree1.root, "root");
bstree1.insert(10);
bstree1.insert(5);
bstree1.insert(15);
// bstree1.insert(18);
bstree1.insert(3);
bstree1.insert(7);
// bstree1.insert(20);
// console.log(bstree1.search(bstree1.root, 10));
// console.log(bstree1.search(bstree1.root, 5));
// console.log(bstree1.search(bstree1.root, 15));
// console.log(bstree1.search(bstree1.root, 35));
// console.log(bstree1.search(bstree1.root, 135));
// bstree1.preOrder(bstree1.root);
// bstree1.postorder(bstree1.root);
// bstree1.inOrder(bstree1.root);
bstree1.breadthFirstSearch();
