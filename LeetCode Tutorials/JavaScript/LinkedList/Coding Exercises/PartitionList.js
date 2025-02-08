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
    let output = "";
    if (temp === null) {
      console.log("empty");
      return;
    }
    while (temp !== null) {
      output += String(temp.value);
      temp = temp.next;
      if (temp !== null) {
        output += " -> ";
      }
    }
    console.log(output);
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

  partitionList(x) {
    let left = new Node(0); // dummy node
    let right = new Node(0); // dummy node

    let less = left;
    let greater = right;
    let current = this.head;

    while (current) {
      if (current.value < x) {
        less.next = current;
        less = less.next;
      } else {
        greater.next = current;
        greater = greater.next;
      }
      current = current.next;
    }
    less.next = right.next;
    greater.next = null;

    this.head = left.next;
  }
}

// Helper function to create list from array
function createListFromArray(arr) {
  const ll = new LinkedList(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    ll.push(arr[i]);
  }
  return ll;
}

// Helper function to compare list with array
function listMatchesArray(ll, arr) {
  let temp = ll.head;
  let i = 0;
  while (temp !== null && i < arr.length) {
    if (temp.value !== arr[i]) {
      return false;
    }
    temp = temp.next;
    i++;
  }
  return temp === null && i === arr.length;
}

// Function to run a single test
function runTest(testNum, description, ll, x, expectedArr) {
  console.log("---------------------------------------");
  console.log(`Test ${testNum}: ${description}`);
  console.log("BEFORE: ");
  ll.printList();
  console.log("PARTITION: " + x);
  ll.partitionList(x);
  console.log("AFTER: ");
  ll.printList();
  console.log(listMatchesArray(ll, expectedArr) ? "PASS" : "FAIL");
}

// Test 1: Basic partition
let ll1 = createListFromArray([1, 4, 3, 2, 5, 2]);
runTest(1, "Basic partition", ll1, 3, [1, 2, 2, 4, 3, 5]);

// Test 2: No elements to partition
let ll2 = createListFromArray([4, 5, 6]);
runTest(2, "No elements to partition", ll2, 3, [4, 5, 6]);

// Test 3: All elements smaller
let ll3 = createListFromArray([1, 2, 2]);
runTest(3, "All elements smaller", ll3, 3, [1, 2, 2]);

// Test 4: Single-element list
let ll4 = createListFromArray([1]);
runTest(4, "Single-element list", ll4, 3, [1]);

// Test 5: All elements equal to partition
let ll5 = createListFromArray([3, 3, 3]);
runTest(5, "All elements equal to partition", ll5, 3, [3, 3, 3]);

console.log("---------------------------------------");
