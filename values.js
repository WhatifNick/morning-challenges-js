/*

Values

Return all of the values of the object's own properties.

Example:
values({one: 1, two: 2, three: 3});
=> [1, 2, 3]

*/

// Your code here!
const values = (hash) => {
  for(let i, i < hash.size, i++) {
    const string = JSON.stringify(hash)
    array = []
    array.push(hash[i])
  }
}

// Check your solution by running these tests: mocha *this_filename*
const assert = require('assert');

describe('Values', () => {
  it('can extract the values from an object', () => {
    const result = values({one: 1, two: 2});
    assert.deepEqual(result, [1, 2]);
  });
  it('... even when one of them is "length"', () => {
    const result = values({one: 1, two: 2, length: 3});
    assert.deepEqual(result, [1, 2, 3]);
  });
});
