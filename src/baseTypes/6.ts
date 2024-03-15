/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/

function showMessage(message) {
  console.log(message);
}

let message: any = showMessage('good luck');

function calc(num1, num2) {
  return num1 + num2;
}

let number: number = calc(7, 2);

function customError() {
  throw new Error('Error');
}

let error: void = customError();


export {};