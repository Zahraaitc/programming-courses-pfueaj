//######################################################################
//###########################           SSTech       ###################
//###########################   Programming Courses  ###################
//######################################################################
let mynumber1, mynumber2: number;
let myOperator: string;

mynumber1 = parseInt(prompt('please enter anumber'));
mynumber2 = parseInt(prompt('please enter anumber'));
myOperator = prompt('please enter anumber');
main(mynumber1, mynumber2, myOperator);

function addition(num1: number, num2: number) {
  return num1 + num2;
}

function subtraction(num1: number, num2: number) {
  return num1 - num2;
}

function multiplication(num1: number, num2: number) {
  return num1 * num2;
}

function division(num1: number, num2: number) {
  if (num2 == 0) {
    return 0;
  } 
  else {
    return num1 / num2;
  }
}

function main(num1: number, num2: number, opper: string) {
  let result: number;
  if (opper == '+') {
    result = addition(num1, num2);
  } else if (opper == '-') {
    result = subtraction(num1, num2);
  } else if (opper == '*') {
    result = multiplication(num1, num2);
  } else if (opper == '/') {
    result = division(num1, num2);
  }
  console.log(result);
}
