function mergeSort(arr) {
    // we are going to use recursion, let's set up a base case

    // notice that an empty or single element array is already sorted
    // so return it if it is one
    if (arr.length <= 1) return arr;
    // let's grab the middle index
    let middle = Math.floor(arr.length / 2);

    // let's do something wild
    // arr.splice delete elements from an array (in place), and return what was deleted
    // so left can be what we return by deleting the first half of the elements
    let left = arr.splice(0, middle)
    // and we can pass it right back to our mergeSort method
    let sortedLeft = mergeSort(left);
    // and we can toss what's left of arr to determine the right side
    let sortedRight = mergeSort(arr);

    // then we can use our helper function to glue everything back together
    return merge(sortedLeft, sortedRight)
  }
  
  
  // HELPER FUNCTION: merge two sorted arrays
function merge(arr1, arr2) {
    var result = []; 
    while (arr1.length && arr2.length) {
        if(arr1[0] <= arr2[0]) {
            result.push(arr1.shift());
        } else {
            result.push(arr2.shift());
        }
    }
    return result.concat(arr1, arr2);
}
  
module.exports = mergeSort;
