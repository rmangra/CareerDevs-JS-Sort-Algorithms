/*  SELECTION SORT -- O(n^2):
 *  Sorts the array by repeatedly finding the smallest unsorted element
 *  and moving it to the beginning of the array (to sort the array in ascending order)
 */

function selectionSort(arr) {

  var min;
  // iterate through the array
  for (var i = 0; i < arr.length; i++) {
    // set current element as the minimum
    min = i;
    // find the minimum element in the unsorted array
    for (var  j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
    // swap the minimum element with first element of the unsorted part
      var swap = arr[i];
      arr[i] = arr[min];
      arr[min] = swap;
    }
  }
  return arr;
}

selectionSort([4,3,8,2,1,7,9,5,6]);

console.log (selectionSort([4,3,8,2,1,7,9,5,6]));