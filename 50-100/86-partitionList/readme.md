## 1- Dummy Nodes Creation:

let left = new ListNode(0)
let right = new ListNode(0)

- You create two dummy nodes:

- left will eventually lead to a linked list of all nodes with values less than x.
- right will eventually lead to a linked list of all nodes with values greater than or equal to x.

## 2- Pointers for Building New Lists:

let less = left
let greater = right

- Here, less and greater are pointers that will help build the two lists. Initially, they point to the dummy nodes.

## 3- Traversing the Original List:

let current = head

while (current){
    if (current.val < x){
        less.next = current 
        less = less.next
    } else {
        greater.next = current
        greater = greater.next
    }
    current = current.next
}

- You traverse the original list with current.
- For each node, you check if its value is less than x:
- If yes, you add it to the left list.
- Otherwise, you add it to the right list.

## 4- Merging the Two Lists:

less.next = right.next
greater.next = null

- After processing all nodes, you link the end of the left list (pointed by less) to the beginning of the right list (which is right.next because right is a dummy node).
- You also set greater.next = null to mark the end of the new list.

## 5- Return the head
 
    return left.next;
- Return the head of the new partitioned list

### You can find the leetcode question at: https://leetcode.com/problems/partition-list

### And you can find my solution at: https://github.com/A-Shalchian/LeetCode/blob/main/50-100/86-partitionList/partitionList.js
