function allPrimes(k){
  //create a new array and make it divisible by 1 and itself
    
     if (k<= 1) {
    return true
  }

   else if (k <= 3) {
    return true
  
  } else if (k%2 === 0 || k%3 === 0) {
    return false
  }
 
  let i = 5
  while (i*i <= k) {
    if (k%i === 0 || k%(i+2) === 0) {
      return false
    }
    i += 6
  }
  return true
}


output:
[allPrimes]
