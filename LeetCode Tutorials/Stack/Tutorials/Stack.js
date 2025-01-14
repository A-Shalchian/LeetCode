class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }
    let temp = this.top;
    if (this.length === 1) {
      this.top = null;
    } else {
      this.top.next = this.top;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
}

let myStack = new Stack(1);

myStack.push(3);
myStack.push(4);
console.log(myStack);
