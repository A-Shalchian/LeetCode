function mergeAsc(arr1, arr2) {
  let combined = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      // for descending order use arr1[i] > arr2[j]
      combined.push(arr1[i]);
      i++;
    } else {
      combined.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    combined.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    combined.push(arr2[j]);
    j++;
  }

  return combined;
}

function mergeDesc(arr1, arr2) {
  let combined = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      combined.push(arr1[i]);
      i++;
    } else {
      combined.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    combined.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    combined.push(arr2[j]);
    j++;
  }

  return combined;
}

function mergeSortAsc(array) {
  if (array.length === 1) return array;

  let midIndex = Math.floor(array.length / 2);
  let left = mergeSortAsc(array.slice(0, midIndex));
  let right = mergeSortAsc(array.slice(midIndex));

  return mergeAsc(left, right);
}

function mergeSortDesc(array) {
  if (array.length === 1) return array;

  let midIndex = Math.floor(array.length / 2);
  let left = mergeSortDesc(array.slice(0, midIndex));
  let right = mergeSortDesc(array.slice(midIndex));

  return mergeDesc(left, right);
}
originalArray = [4, 2, 3, 1, -1];

console.log(mergeSortAsc(originalArray));

console.log(mergeSortDesc(originalArray));
