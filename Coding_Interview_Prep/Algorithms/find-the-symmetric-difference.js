/**
 * @param {...number[]} args
 */
function sym(...args) {
  let sd = [];//Symetric Difference from the sets
  
  for (let arr of args) {

    //sort the array and remove duplicates
    arr = [...new Set(arr.sort((a, b) => a - b))];

    //loop through the current array
    for (let i = 0; i < arr.length; i++) {

      //check if the current value exists in the Symetric Difference array
      if (sd.indexOf(arr[i]) == -1) {
        //if not, push it   
        sd.push(arr[i]);
      }
      else {
        //if exists, remove it
        let index = sd.indexOf(arr[i]);
        sd.splice(index, 1);
      }
    }
  }
  return sd.sort((a, b) => a - b);
}

console.log( sym([1, 2, 3, 3], [5, 2, 1, 4]));
console.log( sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
console.log( sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));
console.log( sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));
console.log( sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]));
