class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size == 0;
  }
  getSize() {
    return this.size;
  }
  //we can eitehr add node to begin,end and random in list
  prepend(value) {
    //to add node to start and every added new node will be head of list
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      //here we will first make new node point to the current head and then make the new node the head
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
      return;
    } else {
      //we will use a temporary current pointer that will point to the current node and then after printing that node will point to next node
      let curr = this.head; // as first node is head
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
  append(value) {
    // to add at end of list
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      //here we will makeuse of prev which will be used to point to the last node such that the prev.next for last node is not null meaning the the node befpr last node has next pointing to the last node
      let prev = this.head;
      while (prev.next) {
        prev = prev.next; // this means that head==>next==>next==>end when it reaches the end where prev.next becomex null and then it exits while loop so previous will now point to last node of list
      }
      prev.next = node;
    }
    this.size++;
  }
  insert(value, index) {
    //it is to add value at any given index from 0 to size of list both included
    if (index < 0 || index > this.size) {
      return;
    }
    //we will handle some scenarios for this method
    //the first scenario is if index is 0 which means adding at begining of list which will handle adding in empty list or filled list as we have the prepend method also we don't need to increment size as it is also handled by prepend
    if (index === 0) {
      this.prepend(value);
    } else {
      //the last scenario is to insert at given index the indexes of nodes are from 0 so if we want to insert add index 2 and we have 3 nodes in list 0 1 2 then the new node will be inserted b/w 1 and 2 such that 1's next is new node and new node's next is 2 .for this we will use a prev pointer starting at head and then incrementing upto  pointing to node one less than the index where new node will be inserted then the new node will point to the next of prev node after setting new node's next we will make prev node point to new node
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }
  removeNode(index) {
    if (index < 0 || index >= this.size) {
      return;
    }
    let toBeRemovedNode;

    if (index === 0) {
      toBeRemovedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      //now loop was canceled b/c we are at prev node of the node to be deleted
      toBeRemovedNode = prev.next; //this means since prev was at one node before the to be dleeted node so be assigned the next of prev which is the node to be deletd to toberemovenode variable
      prev.next = toBeRemovedNode.next; //here the prev is still one node behind the to be dleetd node since we are not modifying it
    }
    this.size--;
    return toBeRemovedNode.value;
  }
  removeNodeByValue(value) {
    if (this.isEmpty()) {
      console.log("list is empty!!!!");
      return;
    }
    let toBeRemovedNode;
    if (this.head.value == value) {
      //here we are chking if first node is containing that value if so then we make the second node the head node and if there is only one node then still head will point to null so no elements
      // toBeRemovedNode = this.head;
      this.head = this.head.next;
      this.size--;
      return `node with value ${value} has been deleted now new list is ${this.print()}`;
    } else {
      //now we will see if the passed in value of node is either present or not and also it is some other position than head
      let prev = this.head;
      while (prev.next && prev.next.value != value) {
        prev = prev.next;
      }
      if (prev.next) {
        toBeRemovedNode = prev.next;
        prev.next = toBeRemovedNode.next;
        this.size--;
        return `node with value ${value} has been deleted now new list is ${this.print()}`;
      }
      return `no node with value ${value} was found!!`;
    }
  }
  searchNodeByValue(value) {
    if (this.isEmpty()) {
      return -1;
    }
    //now we will start at head with index i at 0 and iterate until we found node by value using incrementing
    let i = 0;
    let curr = this.head;
    //while loop will ensure that we iterate untile the last element where the curr.next is null and loop will exit
    while (curr) {
      if (curr.value == value) {
        return i;
      }
      curr = curr.next;
      i++;
    }
    return -1; //it means while loop was exited and no node with valu was found
  }
  reverse() {
    let curr = this.head;
    let prev = null;
    //we will make use of  pointers curr next and prev after making next point to next of a curr node we will then set next of node to prev such that next of head will be null
    while (curr) {
      // while loop if for making sure that there are nodes in list
      let next = curr.next;
      curr.next = prev; //b/c we will for example make head node next to null since it is going to be reversse
      prev = curr; //to move prev pointer
      curr = next;
    }

    //now set head to new first item in list
    this.head = prev;
  }
}

//prepend has O(1) b/c it doesnot depend on how many elements are there in list as we are adding at begining
//removing head node is O(1) as it is at beigning
//removing any other node except head node is O(n) as that node might be last node in list
//append has O(n) b/c it  depend on iterating untile we reached the end  node by using while loop
const list = new LinkedList();
console.log("list mt?", list.isEmpty());
console.log("list size?", list.getSize());
list.print();
// list.prepend(10);
// list.print();
// list.prepend(20);
// list.print();
// list.prepend(30);
// list.print();
// list.append(40);
// list.print();
// list.append(50);
// list.print();
// list.append(60);]
list.insert(10, 0);
list.print();
list.insert(20, 1);
list.insert(30, 2);
list.insert(50, 2);
list.print();
// console.log(list.searchNodeByValue(20));
// console.log(list.searchNodeByValue(30));
//big O of search is o(n)

//removing head node has

list.reverse(); //big O is O(n)
list.print();
