let convert = (x) => {
  const a = x.toString().split('')
  let b = []
  let j=(a.length-1)
  for(let i=0; i < a.length; i++) {
    b.push(parseInt(a[i])*(6**j))
    j--
  }
  // for(let i = x; i > 0; i = x) {
  //   a.push(x%6)
  //   x = Math.floor(x/6)
  //
  // }
  console.log(a)
  console.log(b.reduce(function(acc, val) { return acc + val; }))
  console.log(eval((b).join('+')))


}
convert(3404)
