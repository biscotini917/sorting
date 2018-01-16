'use strict';

function bubbleSort (array) { // optimized + edge cases
  var sorted = false;
  for (var end = array.length; end > 0 && !sorted; end--) { // passes
    sorted = true;
    for (var j = 0; j < end; j++) { // bubbling
      if (!inOrder(array, j)) {
        swap (array, j);
        sorted = false;
      }
    }
  }
  return array;
}

function inOrder (array, index) { //pure function. no modification
  if (index === array.length - 1) return true;
  return array[index] < array[index + 1];
}

function swap (array, index) { // side effects
  var oldLeftValue = array[index];
  array[index] = array[index + 1];
  array[index + 1] = oldLeftValue;
}

function bubbleSort2 (array) { // lacks optimization
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      if(!inOrder(array, j)) swap (array, j);
    }
  }
  return array;
}

console.log(bubbleSort2([5, 10, 1, 100, 3, 9]));
