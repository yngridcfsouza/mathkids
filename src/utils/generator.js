export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateProblem(operation, level = 1) {
  // level pode controlar o tamanho dos números (1: 0-10, 2: 0-20)
  const max = level === 1 ? 10 : 20;
  const a = randomInt(0, max);
  const b = randomInt(0, max);
  if (operation === "subtraction") {
    // garantir resultado não-negativo para crianças
    return a >= b ? { a, b } : { a: b, b: a };
  }
  return { a, b };
}

export function solve({ a, b }, operation) {
  if (operation === "addition") return a + b;
  if (operation === "subtraction") return a - b;
  if (operation === "multiplication") return a * b;
  return null;
}
