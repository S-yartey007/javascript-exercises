const add = function(a,b) {
  return a + b
	
};

const subtract = function(a,b) {
  return a - b
	
};

const sum = function(array) {
  let i=0,sum=0
  while(i < array.length) {
    sum+= array[i];
    i++;

  }
  return sum
	
};

const multiply = function(array) {
  let result = 1;
  for(let i = 0; i < array.length; i++) {
    result*=array[i]
    
  }
  return result

};

const power = function(a,b) {
  return a**b;
	
};

const factorial = function(a) {
  if(a === 0) return 1;
  let result = 1;
  for(let i = 1; i <= a;i++) {
    result *= i
  }
  return result;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
