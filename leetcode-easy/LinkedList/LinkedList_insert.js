class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
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
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  set(index, value) {
    const temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      return this.unshift(value);
    }
    if (index === this.length) {
      return this.push(value);
    }
    const newNode = new Node(value);
    const temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }
}

const myLinkedList = new LinkedList(1);

myLinkedList.push(2);
myLinkedList.push(3);

const val = myLinkedList.insert(2, 10);

console.log(val);
console.log(myLinkedList);
