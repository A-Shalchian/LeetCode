# Recursive Binary Search Tree Methods

## Contains Method

rContains(value , currentNode = this.root)

### why is it (value , currentNode = this.root)

well the value, they just pass it in, if it exists return true, if it doesn't return false, now the currentNode=this.root
this makes our lives easier to not assign a currentnode and no, the user does not have to pass an extra argument

if (currentNode === null) return false

base case when it doesn't exist in the tree

if (value === CurrentNode) return true

### this is our base case which ends the recursion (after going to the next recursion and exiting the call stack)

if (value < currentNode.value) {
return this.rContains(value, currentNode.left)
}

### if the value is less than whatever our currentnode value is, go to the left, this is done with recursion

### and we should also do the right side too

else {
return this.rContains(value, currentNode.right)
}

### and thats it, if it finds the value:

basically comes to the base case and returns true and comes to the active stack which will be one of the rContains and will return true there, exit the stack and our function will return true, and if it doesn't find it,
it will return false.

rContains(value, currentNode = this.root) {
if (currentNode === null) return false;

    if (value === currentNode.value) return true;

    if (value < currentNode.value) {
      return this.rContains(value, currentNode.left);
    } else {
      return this.rContains(value, currentNode.right);
    }

}

## Insert Method

### we will have two functions #rInsert and rInsert

#rInsert(value, currentNode=this.root){

}

the # makes this method private (this is new with javascript)
users cant access this directly they can access the rInsert
(why do we use this? )

### the reason being in the rInsert method we handle an edge case

rInsert(value){
if (this.root === null) this.root = new Node(value)
this.#rInsert(value)
}

this is all the code for our rInsert

now we get to #rInsert

we have the classic, we just keep on moving in the tree to find a free spot and check left and right so let's write it

if (value < currentNode.value){
currentNode.left = this.#rInsert(value, currentNode.left)
}

this is for the left which calls it recursively

else if (value > currentNode.value) {
currentNode.right = this.#rInsert(value, currentNode.right)
}

this is for the right

and after that we return our currentNode
return currentNode

now the base case will be when it finds a free spot it should insert it

if (currentNode === null) return new Node(value)

so the code will be

#rInsert(value, currentNode = this.root) {
if (currentNode === null) return new Node(value);
if (value < currentNode.value) {
currentNode.left = this.#rInsert(value, currentNode.left);
} else if (value > currentNode.value) {
currentNode.right = this.#rInsert(value, currentNode.right);
}
return currentNode;
}

rInsert(value) {
if (this.root === null) this.root = new Node(value);

    this.#rInsert(value);

}

### you could also find all the code at https://github.com/A-Shalchian/LeetCode/blob/main/LeetCode%20Tutorials/RecursiveBST/rBST.js
