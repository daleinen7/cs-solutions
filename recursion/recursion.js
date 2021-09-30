// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(arr, max=arr[0], n=arr.length - 1){
    // This function returns the largest number in a given array.
    // the key to this function is to set the proper default parameters

    // the base case is when we reach the beginning of the array 
    // could also be the end of the array;
    if (n <= 0) return max;
    // update "max" to be the greatest number
    max = Math.max(arr[n], max);

    // run the recursive function!
    return findMax(arr, max, n - 1);
}

function factorial(n){
    // This function returns the factorial of a given number.

    // if the number is one, the factorial is just one, and the function finally return
    if (n <= 1) return 1;

    // the function will keep invoking itself, multiplying the current number
    // with the factorial invoked with the next number down
    return n * factorial(n - 1);
}

function fibonacci(n){
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1

    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function coinFlips(n, i=1, outcomes=['T', 'H']){
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"


    // first, set up some parameters:
        // a parameter to check increment flips
        // a parameter to keep track of the current outcomes

    // if our incrementor gets to the number of flips (n), we can return our outcomes
    if (i === n) return outcomes;

    // let's make a new set up outcomes that we need to push our values to
    let newOutcomes = [];

    // for each iteration of our outcomes...
    outcomes.forEach(outcome => {
        // we need to push that outcome and a 'T'
        newOutcomes.push(outcome + 'T');
        // and another one with an 'H'
        newOutcomes.push(outcome + 'H');
    })
    // now we can resursively invoke our function, incrementing our incrementor
    // and passing in the new incrementor
    return coinFlips(n, i + 1, newOutcomes);

}

function letterCombinations(characters, i = 0, checkedCount=0, combinations=[...characters]){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]

    // let's talk about the parameters first
        // we need to keep track of how many incrementors we are doing
        // the next one is going to be complicated....
            // we only want to bother adding the combinations to the "latest set" of combinations
            // as arr.slice let's you choose a starting position to copy, we will use a checkedCount to grab the "latest set"
        // fnally, let' also keep track of all of the combinations we have so far

    // set up the base case for when to exit the recursive function
    // just return the combinations
    if (i >= characters.length - 1) return combinations;

    // every time the function is invoked, we have the latest set of combinations
    // we don't need to look at them in the next invocation, so let's go ahead and keep track of them here
    let checked = [...combinations];

    // checkedCount is the number of elements that were checked in the last invocation
    // we will ignore all of them using the arr.slice method
    combinations.slice(checkedCount).forEach(combination => {
        // now we want to loop over the base set of "letters"
        characters.forEach(letter => {
            // only add them if the combination doesn't already have them
            if (!combination.includes(letter)) combinations.push(combination + letter);
        });
    });
    // now we can recursively invoke the function
        // pass in the same set of letters
        // increment the incrementor
        // since we only care about the length checked, go ahead and get the length
        // and pass in our latest combinations
    return letterCombinations(characters, i + 1, checked.length, combinations);
}

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}