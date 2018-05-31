let convert = (x) => {
  const a = []

  for(let i = x; i > 0; i = x) {
    if((x%12) === 10) {
      a.push('A')
    }else if((x%12) === 11){
      a.push('B')
    }else {
      a.push(x%12)
    }
    x = Math.floor(x/12)

  }

  // console.log(a)
  return a.reverse().join('')
}

// convert(562)

const assert = require('assert');

describe('base12converter', () => {

  it('convert to base 12', () => {
    const result = convert(5);
    const expected = '5';
    assert.deepEqual(result, expected);
  })
  it('convert to base 12', () => {
    const result = convert(562);
    const expected = '3AA';
    assert.deepEqual(result, expected);
  })
  it('convert to base 12', () => {
    const result = convert(11);
    const expected = 'B';
    assert.deepEqual(result, expected);
  })
  it('convert to base 12', () => {
    const result = convert(1235);
    const expected = '86B';
    assert.deepEqual(result, expected);
  })
});
