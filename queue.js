// two pointers FRONT and REAR
// FRONT track the first element of the queue
// REAR track the last element of the queue
// initially, set value of FRONT and REAR to -1
// Enqueue Operation
// check if the queue is full
// for the first element, set the value of FRONT to 0
// increase the REAR index by 1
// add the new element in the position pointed to by REAR
// Dequeue Operation
// check if the queue is empty
// return the value pointed by FRONT
// increase the FRONT index by 1
// for the last element, reset the values of FRONT and REAR to -1

// As you can see in the image below, after a bit of enqueuing and dequeuing, the size of the queue has been reduced.
// the empty spaces at front cannot be used after dequeing from a full queue
// Limitation of a queue
// And we can only add indexes 0 and 1 only when the queue is reset (when all the elements have been dequeued).

// After REAR reaches the last index, if we can store extra elements in the empty spaces (0 and 1), we can make use of the empty spaces. This is implemented by a modified queue called the circular queue.

// Circular Queue Operations
// The circular queue work as follows:

// two pointers FRONT and REAR
// FRONT track the first element of the queue
// REAR track the last elements of the queue
// initially, set value of FRONT and REAR to -1
// 1. Enqueue Operation
// check if the queue is full
// for the first element, set value of FRONT to 0
// circularly increase the REAR index by 1 (i.e. if the rear reaches the end, next it would be at the start of the queue)
// add the new element in the position pointed to by REAR
// 2. Dequeue Operation
// check if the queue is empty
// return the value pointed by FRONT
// circularly increase the FRONT index by 1
// for the last element, reset the values of FRONT and REAR to -1

// However, the check for full queue has a new additional case:

// Case 1: FRONT = 0 && REAR == SIZE - 1
// Case 2: FRONT = REAR + 1
// The second case happens when REAR starts from 0 due to circular increment and when its value is just 1 less than FRONT, the queue is full.
class Queue {
  constructor(props) {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    return this.items.shift();
  }
  isEMpty() {
    return this.items.length == 0;
  }
  peek() {
    if (!this.isEMpty()) {
      return this.items[0];
    }
    return "queue is empty";
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}
const queue = new Queue();
console.log(queue.isEMpty());
queue.enqueue(33);
queue.enqueue(93);
queue.enqueue(43);
console.log(queue.isEMpty());
console.log(queue.peek());
queue.print();
queue.dequeue();
queue.print();
queue.dequeue();
queue.dequeue();
queue.print();
