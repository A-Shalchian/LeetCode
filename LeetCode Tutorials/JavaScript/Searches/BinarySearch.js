function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (right >= left) {
    let mid = Math.floor((right + left) / 2);
    if (arr[mid] === target) return mid;
    if (target < arr[mid]) right = mid - 1;
    else left = mid + 1;
  }

  return -1;
}

// the array must be sorted for binary search to work
// worst case time complexity is O(log n)
// best case time complexity is O(1) (if the target is in the middle of the array)
// average time complexity is O(log n)
// space complexity is O(1)

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)); // 0
