/*  MERGE SORT -- O(n):
 *  A divide and conquer algorithm that breaks down the array into smaller arrays and then
 *  combines them back together in sorted order leveraging recursion.
 */

function merge(left, right) {
  // array to hold the sorted values
  var sortedArr = [];
  // the indexes we will iterate through whiles sorting
  var l = 0, r = 0;
  // loop while both indexes are less then the length of their array
  while (l < left.length && r < right.length) {
    // push smaller value and increment index of that array
    if (left[l] < right[r]) {
       sortedArr.push(left[l]);
       l++;
    } else {
       sortedArr.push(right[r]);
       r++;
    }
  }
  // combine remaining elements from subarrays and return final sorted array
  return sortedArr.concat(left.slice(l)).concat(right.slice(r));
}

function mergeSort(arr){

  // if array only contains one element, return that value
  if (arr.length < 2)
    return arr;

  // find the middle of the array
  var mid = Math.floor(arr.length / 2);
  // split array into left and right halves
  var left = arr.slice(0, mid);
  var right = arr.slice(mid);

  // send left and right halves to the mergeSort to break it down into pieces then merge those
  return merge(mergeSort(left),mergeSort(right));
}

mergeSort([4,3,8,2,1,7,9,5,6]);

console.log(mergeSort([4,3,8,2,1,7,9,5,6]));