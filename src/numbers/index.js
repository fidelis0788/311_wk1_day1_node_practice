const isEven = (num) => {
    if(num%2==0){
     return(true)
    }else{
      return(false)
    }
  } 
  
const sum = (arr) => {
  // write code for numbers.sum
   const reducer = (a,b) => a+b
   return arr.reduce(reducer)
    
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum

  for (var i=0; i<arr.length; i++){ 

  let totals = sum += arr[i]
  if(totals == sum){
    return false
  }
  
  }
}

module.exports = {
  isEven,
  sum,
  comboSum
}