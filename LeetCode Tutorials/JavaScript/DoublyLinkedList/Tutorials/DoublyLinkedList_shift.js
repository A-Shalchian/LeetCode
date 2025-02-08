class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null; // only this has been added to the Node class
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.prev = this.tail; // this line has been added
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    let temp = this.head;

    if (!this.head) {
      return undefined;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      temp.next = null;
      this.head.prev = null;
    }
    this.length--;
    return temp;
  }
}

const myDoublyLinkedList = new DoublyLinkedList(1);

myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);

myDoublyLinkedList.shift();

console.log(myDoublyLinkedList);
