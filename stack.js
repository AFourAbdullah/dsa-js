class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    const elementREmoved = this.items.pop();
    return elementREmoved;
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEMpty() {
    return this.items == 0;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();
console.log(stack.isEMpty());
stack.push(33);
stack.push(29);
stack.push(803);
stack.push(203);

stack.print();
console.log(stack.peek());

stack.pop();
stack.print();
console.log(stack.peek());
// difference b/w array and stack is that arrays allow random indexed based accessed where stack implements lifo
