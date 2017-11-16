/*  INSERTION SORT --- O(n^2):
 *  Sorts the array starting with the second element, which is compared to the previous element.
 *  If the first element is larger, the second element is inserted before the first.  Next, compare
 *  the third element to the previous, and so on, until the array is sorted.
 */

function insertionSort(arr) {

    // iterate through the array
    for (var i = 0; i < arr.length; i++) {
        // set value to be inserted
        var insert = arr[i];
        // select position where value will be inserted
        var j = i - 1;
        // check if previous element is larger than value to insert
        while (j >= 0 && arr[j] > insert) {
            arr[j + 1] = arr[j];
            j--;
        }
        // set element to insert value
        arr[j + 1] = insert;
    }
    return arr;
}

insertionSort([4,3,8,2,1,7,9,5,6]);

console.log (insertionSort([4,3,8,2,1,7,9,5,6]));