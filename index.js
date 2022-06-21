function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    
    const num1 = target - array[i];
    //loop through the rest of the array 
    for (let j = i + 1; j < array.length; j++) {

      //Check if total matches target
      if (array[j] === num1) {
        return true
      } 

    }
  } 
  return false
}

console.log(hasTargetSum([3,8,12,4,11,7],10));
console.log(hasTargetSum([22, 19, 4, 6, 30], 25));
console.log( hasTargetSum([1, 2, 5], 4));


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
}

module.exports = hasTargetSum;
