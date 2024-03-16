/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/

function showMessage(message: string): void {
  console.log(message);
}

let message: void = showMessage('good luck');

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

let number: number = calc(7, 2);

function customError(): never {
  throw new Error('Error');
}


export {};