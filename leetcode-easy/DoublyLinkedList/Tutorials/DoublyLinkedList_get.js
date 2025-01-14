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

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp = this.head;
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
    }
    return temp;
  }
}

const myDoublyLinkedList = new DoublyLinkedList(1);

myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);

const val = myDoublyLinkedList.get(1);

console.log(val);
