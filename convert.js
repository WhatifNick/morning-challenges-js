convert = (x, base) => {
  const a = []

  for(let i = x; i > 0; i = x) {
    if((x%base) === 10) {
      a.push('A')
    }else if((x%base) === 11){
      a.push('B')
    }else if((x%base) === 12){
      a.push('C')
    }else if((x%base) === 13){
      a.push('D')
    }else if((x%base) === 14){
      a.push('E')
    }else if((x%base) === 15){
      a.push('F')
    }else {
      a.push(x%base)
    }
    x = Math.floor(x/base)

  }

  // console.log(a)
  return a.reverse().join('')
}

// convert(403562, 16)
//
const assert = require('assert');

describe('base12converter', () => {

  it('convert to base 12', () => {
    const result = convert(5, 12);
    const expected = '5';
    assert.deepEqual(result, expected);
  })
  it('convert to base 12', () => {
    const result = convert(562, 12);
    const expected = '3AA';
    assert.deepEqual(result, expected);
  })
  it('convert to base 12', () => {
    const result = convert(11, 12);
    const expected = 'B';
    assert.deepEqual(result, expected);
  })
  it('convert to base 12', () => {
    const result = convert(1235, 12);
    const expected = '86B';
    assert.deepEqual(result, expected);
  })
});
