function bubbleSort(array) {
  for (i = array.length - 1; i > 0; i--) {
    for (j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

console.log(bubbleSort([1, 5, 6, 2, 3, 4]));
