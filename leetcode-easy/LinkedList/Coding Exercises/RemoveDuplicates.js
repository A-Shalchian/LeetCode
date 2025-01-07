/* LL: Remove Duplicates ( ** Interview Question)
Implement a member function called removeDuplicates() that removes all duplicate nodes from the linked list based on their values.

Note: this linked list class does NOT have a tail which will make this method easier to implement.



Output:

The function should modify the linked list in-place, removing all nodes with duplicate values.



Constraints:

You are allowed to use the JavaScript Set data structure to keep track of unique node values.





Example 1:

Suppose you have a LinkedList object, list, with the following values:
1 -> 2 -> 3 -> 2 -> 1 -> 4

After calling the removeDuplicates() function:

list.removeDuplicates();
The linked list should now have the following values: 1 -> 2 -> 3 -> 4





Example 2:

Now suppose you have a LinkedList object, list, with the following values:
3 -> 3 -> 3


After calling the removeDuplicates() function:

list.removeDuplicates();
The linked list should now have the following value: 3



Remember to update the length.

*/

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
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    if (this.head === null) {
      console.log("Head: null");
    } else {
      console.log("Head: " + this.head.value);
    }
  }

  getLength() {
    console.log("Length: " + this.length);
  }

  makeEmpty() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  // WRITE THE REMOVEDUPLICATES METHOD HERE //

  removeDuplicates() {
    let current = this.head;
    let uniqueValues = new Set();
    let prev = null;

    while (current !== null) {
      if (uniqueValues.has(current.value)) {
        prev.next = current.next;
        this.length--;
      } else {
        uniqueValues.add(current.value);
        prev = current;
      }
      current = current.next;
    }
  }
}
let myLinkedList = new LinkedList(1);

myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();

myLinkedList.removeDuplicates();

console.log("\nList after removing duplicates:");
myLinkedList.printList();

/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1
    2
    3
    3
    4
    5
    5
    List after removing duplicates 
    */
