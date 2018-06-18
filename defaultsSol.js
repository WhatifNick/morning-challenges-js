/*
Defaults
Fill in undefined properties in object with the first value present in the
following list of defaults objects.
Example:
const iceCream = {flavor: "chocolate"};
defaults(iceCream, {flavor: "vanilla", sprinkles: "lots"});
=> {flavor: "chocolate", sprinkles: "lots"}
*/

// Your code here!
const defaults = (original, defaults) => {
    for(key in defaults){
      if(defaults.hasOwnProperty(key)){
        if(original[key] === undefined){
            original[key] = defaults[key]
        }
      }
    }
    return original
  }