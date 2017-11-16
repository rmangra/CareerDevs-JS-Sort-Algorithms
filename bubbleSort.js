/*  BUBBLE SORT --- O(n^2):
 *  Sorts the array by repeatedly swapping adjacent elements
 *  if they are not in ascending order
 */

function bubbleSort(arr) {

    // initialize a boolean value to false since array is not sorted
    var isSorted = 0;
    // while loop containing sort algorithm which runs as long as array is unsorted
    while (!isSorted) {
        // sets boolean to true
        isSorted = 1;
        // iterate over the values in the array
        for (var j = 0; j < arr.length - 1; j++) {
        // compare adjacent elements
            if (arr[j] > arr[j + 1]) {
            // initalize a variable that will temporarily hold array value
            var swap = arr[j];
            // swap elements that are in the wrong order
            arr[j] = arr[j + 1];
            arr[j + 1] = swap;
            // boolean is set to false since array had to be sorted
            isSorted = 0;
            }
        }
    }
    return arr;
}

bubbleSort([4,3,8,2,1,7,9,5,6]);

console.log (bubbleSort([4,3,8,2,1,7,9,5,6]));