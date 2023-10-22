class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.items = new Array(capacity);
    this.rear = -1;
    this.front = -1;
    this.currentLength = 0;
  }
  isFull() {
    return this.capacity == this.currentLength;
  }
  isEmpty() {
    return this.currentLength == 0;
  }
  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength++;
      if (this.front == -1) {
        this.front = 0;
      }
    } else {
      console.log("queue is full!!!!!!!!");
    }
  }
  dequeeu() {
    if (this.isEmpty()) {
      console.log("q is empty");
      return null;
    }
    const itemAtFront = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;

    this.currentLength--;
    if (this.isEmpty()) {
      this.rear = -1;
      this.front = -1;
    }
    return itemAtFront;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return "queue is empty";
  }
  print() {
    if (this.isEmpty()) {
      console.log("q is empty");
      return;
    } else {
      let i;
      let str;
      for (i = this.front; i !== this.rear; (i = i + 1) % this.capacity) {
        str += this.items[i] + "";
      }
      str += this.items[i];
    }
  }
}
