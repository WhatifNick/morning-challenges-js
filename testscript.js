let convert = (x) => {
  const a = []

  for(let i = x; i > 0; i = x) {
    a.push(x%6)
    x = Math.floor(x/6)

  }
  console.log(a.reverse().join())
}



// def convert (x)
//   a = []
//   div = x
//   while div > 0
//     a.push(x%4)
//     x = x/4
//     div = x
//   end
//   puts result = a.reverse.join
// end

convert(132)
