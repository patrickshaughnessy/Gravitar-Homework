'use strict'

var maths = function(operation, nums){

  var result;

  switch (operation) {
    case 'square':
      result = Math.pow(nums, 2);
      break;
    case 'sum':
      result = nums.reduce(function(a,n){
        return Number(a) + Number(n);
      });
      break;
    default:
      result = "invalid input"
  }

  return `Your result is ${result}`;

}

module.exports.maths = maths;
