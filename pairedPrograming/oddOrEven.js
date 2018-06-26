
const oddOrEven = array => {
    // let sum = eval(array.join('+'))
    let sum = 0;
    array.forEach(num => {
        sum += num
    })
    if(sum % 2 === 0) {
        return 'Even'
    } else {
        return 'Odd'
    }
}





const assert = require('assert');

describe('oddOrEven', () => {
    it('Get the sum of an array and determine if it is odd or even', () => {
        assert.deepEqual(oddOrEven([1,2,3]), 'Even')
    })
    it('Get the sum of an array and determine if it is odd or even', () => {
        assert.deepEqual(oddOrEven([1, 2, 3, 1]), 'Odd')
    })
    it('Get the sum of an array and determine if it is odd or even', () => {
        assert.deepEqual(oddOrEven([2]), 'Even')
    })
    it('Get the sum of an array and determine if it is odd or even', () => {
        assert.deepEqual(oddOrEven([0]), 'Even')
    })
})