function itemInCommon(arr1, arr2) {
  // O(n^2)
  //   for (let i = 0; i < arr1.length; i++) {
  //     for (let j = 0; j < arr2.length; j++) {
  //       if (arr1[i] === arr2[j]) return true;
  //     }
  //   }
  //   return false;

  // O(2n) = O(n)
  let obj = {};
  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = true;
  }
  for (let j = 0; j < arr2.length; j++) {
    if (obj[arr2[j]]) return true;
  }
  return false;
}

let arr1 = [1, 3, 5];
let arr2 = [2, 4, 5];

console.log(itemInCommon(arr1, arr2));
