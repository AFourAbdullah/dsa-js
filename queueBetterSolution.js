class QueueOptimized {
  constructor() {
    this.items = {};
    this.front = -1;
    this.rear = -1;
  }
  enqueue(element) {
    if (this.isEmpty()) {
      this.front = 0;
      this.rear = 0; //will only increment front once if the queue was emepty
    }

    this.items[this.rear] = element;
    this.rear++;
  }
  dequeue() {
    const itemAtFront = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return itemAtFront;
  }
  isEmpty() {
    return this.rear - this.front == 0;
  }
  peek() {
    return this.items[this.front];
  }
  size() {
    return this.rear - this.front;
  }
  print() {
    console.log(this.items);
  }
}

const queue = new QueueOptimized();
console.log(queue.isEmpty());
queue.enqueue(33);
console.log(queue.isEmpty());

console.log(queue.size());
queue.enqueue(93);
queue.enqueue(43);
queue.print();

console.log(queue.isEmpty());
console.log(queue.peek());
// queue.print();
// queue.dequeue();
// // queue.print();
// queue.dequeue();
console.log(queue.dequeue());
console.log(queue.peek());

queue.print();
