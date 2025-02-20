function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  if (right >= left) {
    let mid = Math.floor((right + left) / 2);
    if (arr[mid] === target) return mid;
    if (target < arr[mid])
      return binarySearchRecursive(arr, target, left, mid - 1);
    else return binarySearchRecursive(arr, target, mid + 1, right);
  }

  return -1;
}

console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)); // 4
console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)); // 0
