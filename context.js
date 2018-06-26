// ******
// Context
// ******
// 
// Start with the following code:
const whatsThisThen = function (someParam) {
    console.log(this.name, someParam)
}

const ye = {
    name: 'Kanye'
}

// a) Research: call, apply and bind. Guess the output of each before running:

// b) 
// whatsThisThen()
// My expectation:
// Actual output:

// c)
// whatsThisThen('hello!')
// My expectation:
// Actual output:

// d)
// whatsThisThen.call(ye)
// My expectation:
// Actual output:

// e)
// whatsThisThen.call(ye, 'hello!')
// My expectation:
// Actual output:

// f)
// whatsThisThen.apply(ye, 'hello')
// My expectation:
// Actual output:

// g)
// whatsThisThen.apply(ye, ['hello'])
// My expectation:
// Actual output:

// h) What does `call` do?

// i) What's the difference between `call` and `apply`?

// j) When would you use bind?