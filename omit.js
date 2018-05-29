/*
Omit
Return a copy of the object, filtered to omit the blacklisted keys
Example:
omit({name: 'moe', age: 50, userid: 'moe1'}, 'name', 'age');
=> {userid: 'moe1'}
Hint: Given there's an indefinite number of arguments, we'll need to loop
through them. Look up the "rest parameter" syntax.
*/

// Your code here!
const omit = (list, ...args) => {
  const blacklist = list
  // return blacklist.map(x => {
  //   return blacklist.splice(x[args])
  // })
  // list.forEach.push(item.value
  args.forEach(function(key_name) {
    delete blacklist[key_name]
    console.log(blacklist)
  })
  return blacklist

}

// const list = {a: 1, b: 2, c: 3};
// omit(list, 'a')
// Check your solution by running these tests: mocha *this_filename*
const assert = require('assert');

describe('Omit', () => {
  const list = {a: 1, b: 2, c: 3};

  it('can omit a single property', () => {
    const result = omit(list, 'a');
    const expected = {b: 2, c: 3};
    assert.deepEqual(result, expected);
  })
  it('can omit multiple properties', () => {
    const result = omit(list, 'a', 'c');
    const expected = {b: 2};
    assert.deepEqual(result, expected);
  })
});
