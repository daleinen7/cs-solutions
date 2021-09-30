function quickSort(arr){
    // let's use recursion to do this!
    // the base case will be when the arr.length is 1
    // because single element arrays are always sorted
    if (arr.length <= 1) return arr;
    // let's use the last element of the array to be partition
    // notice how it gets taken out of the array, this is because it will become the middle
    let partition = arr.pop();
    // everything less (or equal to) than our partition gets to go to a left array
    let left = arr.filter(element => element <= partition);
    // everything more gets to go to a right array
    let right = arr.filter(element => element > partition);
    // the spread operator let's us right this stuff out like English
    // return an array, that starts with the sorted left side
    // then has our partition in the middle
    // and our sorted right side at the end
    return [...quickSort(left), partition, ...quickSort(right)];
  }
  
module.exports = quickSort;