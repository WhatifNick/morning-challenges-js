const commonCharacters = function(string1, string2){
    //Nick
    let array1 = string1.split('')
    let array2 = string2.split('')
    let results = []

    // //Nick
    for(let i=0; i<array1.length; i++) {
        for(let j=0; j<array2.length; j++) {
            if (array1[i] === array2[j] && array1[i] !== ' ' && !results.includes(array1[i])) {
                    results.push(array1[i]) 
            }
        }
    }
    const a = results.join('')
   
    return a


    //  const x = string1.localeCompare(string2)

    //  return x
   
//     if (string1 === string2) {
//        return string1
//    } else if (string1 !== string2) {
        
//    } else ()



// commonCharacters('hello','hello';)

// // revel:
// // just do nested loop: cant to that. 

// let compare = () => {
// for (i=0; i<= string1.length; i++) {
//     let matchingletters = []
//     for (k=0; k <= string2.length; k++){
//       if (string1.charAt(i) === string2.charAt(k)) {
//             matchingletters.push(string1.charAt(i))
//       }
//     }
//     return matchingletters.join('')
//  }
}







// Common Characters
// Write a function that accepts two strings as arguments,
// and returns only the characters that are common to both strings.

// Your function should return the common characters in the same order
// that they appear in the first argument. Do not return duplicate characters
// and ignore whitespace in your returned string.

// Example: commonCharacters('acexivou', 'aegihobu')
// Returns: 'aeiou'

// ** Solution should be linear **

// Your Code Should Pass:
const chai = require('chai');
const should = chai.should();

describe('Common Characters', function(){
  it('returns common characters', function(){
    commonCharacters('abc', 'abc').should.equal('abc');
  });

  it('returns common characters', function(){
    commonCharacters("What is love?", "Baby don't hurt me").should.equal('hatoe');
  });

  it('returns common characters', function(){
    commonCharacters('Riding on a buffalo makes me more approachable', 'so what').should.equal('oash');
  });

  it('returns empty string', function(){
    commonCharacters('', 'No more').should.equal('');
  });

  it('returns empty string', function(){
    commonCharacters('No more', '').should.equal('');
  });

  it('returns empty string', function(){
    commonCharacters('', '').should.equal('')
  });
});