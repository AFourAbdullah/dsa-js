class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}
class LinkedList {
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
}
