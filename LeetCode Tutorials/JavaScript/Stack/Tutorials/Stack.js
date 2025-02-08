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
    } // doesnt need to check the this.length === 1 since the stack will return null even if it has 1
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;

    this.length--;
    return temp;
  }
}

let myStack = new Stack(1);

myStack.push(3);
myStack.push(4);
console.log(myStack);
