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

  pop() {
    if (this.length === 0) {
      return undefined;
    }
    let temp = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
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

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    let temp = this.get(index);
    temp.prev.next = temp.next;
    temp.next.prev = temp.prev;
    temp.next = null;
    temp.prev = null;
    this.length--;
    return temp;
  }
}

const myDoublyLinkedList = new DoublyLinkedList(1);

myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);

myDoublyLinkedList.shift();

console.log(myDoublyLinkedList);
