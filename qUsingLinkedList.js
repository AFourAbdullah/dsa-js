class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}
class LinkedListWithTail {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size == 0;
  }
  getSize() {
    return this.size;
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
  prepend(value) {
    const node = new Node(value);
    // if list was empty then first node was made head and tail
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      //here we will first make new node point to the current head and then make the new node the head and we don't need to handle the tail as it was the first ever node in list since we are prepending so the first ever node will be the tail i.e last one
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  append(value) {
    const node = new Node(value);
    // if list was empty then first node was made head and tail
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      //since we are adding in last so new node have to be the tail so we will make tail.next=new node to be added and then make new node as this.tail
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }

    //we will remove head node and get hold of the value of the node
    const valuee = this.head.value;
    this.head = this.head.next; // here we are making next of the to be deletd head the new head of list
    this.size--;
    return valuee;
  }
  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.tail.value;
    if (this.size == 1) {
      //it will check if only one node is in list then we will make both head and tail null
      this.head = null;
      this.tail = null;
    } else {
      //if nodes are more than 1 in list
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      //loop will execute only when we are on prev  node before tail
      prev.next = null; //here we are making one node before tail's prev to null
      this.tail = prev;
    }
    this.size--;
    return value;
  }
}
class Queue {
  constructor() {
    this.list = new LinkedListWithTail();
  }
  enqueue(value) {
    //we will insert at tail
    this.list.append(value);
  }
  dequeue() {
    return this.list.removeFromFront();
  }
  peek() {
    return this.list.head.value;
  }
  isEmpty() {
    return this.list.isEmpty();
  }
  getSize() {
    return this.list.getSize();
  }
  print() {
    return this.list.print();
  }
}
const q1 = new Queue();
console.log(q1.isEmpty());
console.log(q1.getSize());
q1.enqueue(10);
q1.enqueue(20);
q1.enqueue(30);
console.log(q1.getSize());

q1.print();
q1.dequeue();
q1.print();
console.log(q1.getSize());
