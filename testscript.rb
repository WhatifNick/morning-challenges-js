def convert (x)
  a = []
  div = x
  while div > 0
    a.push(x%4)
    x = x/4
    div = x
  end
  puts result = a.reverse.join
end

convert(23)
