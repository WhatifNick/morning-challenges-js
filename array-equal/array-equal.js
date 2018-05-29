/*

  Array Equal takes two arrays and returns true if they are identical.
  Note: The arrays will only contain strings or numbers.

  Examples:
  arrayEqual([1,2,3], [1,2,3]) -> true
  arrayEqual([1,2,3], [2,3,4]) -> false
  arrayEqual([1,2,3,4], [1,2,3]) -> false
  arrayEqual([1,2,3], [1,2,3,4]) -> false
  arrayEqual([], []) -> true
  arrayEqual(["hi"], ["hello"]) -> false
  arrayEqual(["1","2","3"], [1,2,3]) -> false

  Check your solution:  Open index.html to run the tests!

*/
// function arrayEqual(a, b) {

  // Check lengths
//   if (a.length !== b.length) {
//     return false;
//   }
//
//   for(let i=0; i<a.length; i++) {
//
//     // Handle nested arrays
//     if (Array.isArray(a[i])) {
//       // Recurse
//       if (!arrayEqual(a[i], b[i])){
//         return false;
//       }
//     } else if (a[i] !== b[i]) { // Check values
//       return false;
//     }
//   }
//
//   return true; //Otherwise, all good
//
// }


function arrayEqual(a, b) {
  /* your code here */
  if(a.length !== b.length) {
    return false;
  }
  for(let i=0; i<a.length; i++) {
    if (Array.isArray(a[i])) {
      if(!arrayEqual(a[i], b[i])){
        return false
      }
    } else if(a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}
