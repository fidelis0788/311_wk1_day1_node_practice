const split = (str, delim) => {
  // write code for strings.split
  let x = str.split(" ",0)
  return x
  let y = str.split(" ",1)
  return y
  let z = str.split(" ",2)
  return z


}

const pairs = (str) => {
  // write code for strings.pairs
return str.match(/(..)/g)
}

const reverse = (str) => {
  // write code for strings.reverse
  let x = str.split('').reverse().join('')
  return x
}

module.exports = {
  split,
  pairs,
  reverse
}