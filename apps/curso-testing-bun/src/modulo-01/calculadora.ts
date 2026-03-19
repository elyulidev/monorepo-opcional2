// src/modulo-02/calculadora.ts

// Uma calculadora simples — nosso primeiro cobaia para testes

export function somar(a: number, b: number): number {
  return a + b;
}

export function subtrair(a: number, b: number): number {
  return a - b;
}

export function multiplicar(a: number, b: number): number {
  return a * b;
}

export function dividir(a: number, b: number): number {
  // Atenção: divisão por zero é um problema real!
  if (b === 0) {
    throw new Error("Não é possível dividir por zero");
  }
  return a / b;
}
