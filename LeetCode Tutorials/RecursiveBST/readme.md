# Recursive Binary Search Tree Contains method

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
