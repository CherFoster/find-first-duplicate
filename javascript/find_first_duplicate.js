function findFirstDuplicate(arr) {
  const duplicates = new Set();
  for(num of arr){
    if (duplicates.has(num)){
      return num;
    }
    duplicates.add(num)
  }
  return -1
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// iterate over the array
// if a number matches a number in the array, return duplicate
// else if no duplicates, return -1