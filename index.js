function hasTargetSum(array, target) {
  // Write your algorithm here
  const compNums = {};
  for (i in array) {
    if (compNums[(array[i]).toString()] !== undefined) {
      return true
    } else {
      compNums[target - array[i]] = array[i];
    };
  };
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n + 6)
  or O(n)
*/

/* 
  Add your pseudocode here
  create new object of potential correct numbers
  for each number in 'array',
    if an element already exists in the object with a key equaling the current number, return true
    otherwise, add it to the object with its key equaling its difference from the target, and its value equaling the current number
  if no 'true' returns trigger, return false
*/

/*
  Add written explanation of your solution here
  This function stores each number in the given array into an object, ordered with the number's difference from the target number as the element key and the number as the value.
  Before storing the number, it checks to see if that number already exists as a key (which would be the matching number making the given array 'true').
  If no pair of numbers match, the function returns 'false'.
  This function also works for negative numbers.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 5, 8, 3, 15], 7));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, -5, 8, 3, 12], 7));
}

module.exports = hasTargetSum;
