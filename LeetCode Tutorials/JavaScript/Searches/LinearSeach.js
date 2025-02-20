function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// linear search is the simplest search algorithm
// it checks every element in the array for the target
// best case time complexity is O(1) (if the target is at the first index)
// worst case time complexity is O(n) (if the target is at the last index)
// average time complexity is O(n)
// space complexity is O(1) (assuming that one variable is used for the index)
// linear search is not efficient for large arrays

myarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(linearSearch(myarr, 5)); // 4
