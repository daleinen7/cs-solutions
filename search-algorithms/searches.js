function binarySearch(arr, element){
    // search through the array non-recursively for the element
    // if the element is not found, return -1
    // if the element is found, return the index at which it was found

    // ceiling and floor are going to be indexes
    // ceiling and floor have to be initialized "outside" of the potential values
    // arrays don't have a -1 index. The lowest is 0
    let floor = -1;
    // .length is always one greater than the last index.
    // So we can set the ceiling to arr.length;
    let ceiling = arr.length;
    //   if the floor "meets" the ceiling, there was no match, and the while loop won't run anymore
    while (floor + 1 < ceiling) {
        // our guess can be the halfway point
        let guess = Math.floor((ceiling + floor) / 2);
        // we need to check actual values now, if it matches, boo yah!
        if (arr[guess] === element) return guess;
        // if the guess value is bigger than element, that means the element should be less than the guess value
        if (arr[guess] > element) {
            // so set the ceiling to guess
            ceiling = guess;
        } else {
        // otherwise, it's on the other side
            floor = guess;
        }
    }
    // if the while loop exited without finding the element, that means that the element wasn't found
    return -1;
}

function recursiveBinarySearch(arr, element, floor = 0, ceiling = arr.length - 1, middle = Math.floor((ceiling - 1) / 2)){
    // let's set up our base cases
    // if the floor met the ceiling
    if (floor === ceiling) {
        // check if our middle element  is what we are looking for
        return arr[middle] === element ? middle : -1;
    }
    // if we happen upon the elment while setting the middle point, just return it
    if (arr[middle] === element) return middle;
    // if our guess is less than the element, we have to update the floor and the middle point to look at
    if (arr[middle] < element) {
        floor = middle + 1;
        middle = Math.floor((ceiling + floor) / 2);
        // then do some recursion
        return recursiveBinarySearch(arr, element, floor, ceiling, middle);
    // if our guess is bigger, we change the ceiling
    } else {
        ceiling = middle - 1;
        middle = Math.floor((ceiling + floor) / 2);
        // then do some recursion
        return recursiveBinarySearch(arr, element, floor, ceiling, middle);
    }
}

module.exports = {
    binarySearch,
    recursiveBinarySearch
}