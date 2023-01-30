// Instructions can be found in rest_parameters.md

function add(...rest) {  
  
  return rest.reduce((sum, num) => sum + num, 0);
}

console.log(add(1, 2, 3, 4, 5));

//module.exports = {add};
exports.add = add
