// Crie um algoritmo que percorre uma array unidimensional 
// contendo letras e números: [ “a”, 10, “b”, “hola”, 122, 15]

const array = ['a', 10, 'b', 'hola', 122, 15];

function filterArray() {
  return {
    a: array.filter((value) => typeof value === 'string'),
    b: array.filter((value) => typeof value === 'number'),
    c: array.reduce((a, b) => (a > b ? a : b)),
  };
}

//***************************************************

// Crie um hashmap (ou um objeto simples em JavaScript)
// que contenha as funções elementares de adição, subtração,
// multiplicação e divisão.

function sum(numbers) {
  return numbers.reduce((a, b) => a + b);
}

function subtract(numbers) {
  return numbers.reduce((a, b) => a - b);
}

function multiply(numbers) {
  return numbers.reduce((a, b) => a * b);
}

function divide(a, b) {
  if (a <= 0) return 'Dividendo tem que ser maior que 0.';
  return a / b;
}

function mathOperators() {
  return {
    sum,
    subtract,
    multiply,
    divide,
  };
}

// ************************************************************

// Crie um algoritmo que gere o seguinte padrão de ID aleatório: XXXX-AAAA-BBBB-CCCC

function generateId() {
  let parts = [];

  for (let i = 0; i < 4; i += 1) {
    parts = [
      ...parts,
      Math.random().toString(20).substring(2, 6).toUpperCase(),
    ];
  }

  return parts.join('-');
}
