function mergeSort (array) {
  if (array.length < 2) return array; //base case
  var splits = split(array),
    left = splits[0],
    right = splits[1];
  return merge(mergeSort(left), mergeSort(right)); //merge sort
}
function split (array) {
   var numSplit = array.length / 2;
   var leftArray = array.slice(0, numSplit);
   var rightArray = array.slice(numSplit);
   return [leftArray, rightArray];
}

function merge (left, right) {
  var mergedArr = [],
    leftIdx = 0,
    rightIdx = 0;

    while (leftIdx < left.length && rightIdx < right.length) {
      if (left[leftIdx] < right[rightIdx]) {
        mergedArr.push(left[leftIdx]);
        leftIdx++;
      } else {
        mergedArr.push(right[rightIdx]);
        rightIdx++;
      }
    }
    for (; leftIdx < left.length; leftIdx++) mergedArr.push(left[leftIdx]);
    for (; rightIdx < right.length; rightIdx++) mergedArr.push(right[rightIdx]);
    return mergedArr;
}
