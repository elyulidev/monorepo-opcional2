// src/modulo-02/calculadora.test.ts

// Importamos as ferramentas de teste do Bun
import { expect, test, describe } from "bun:test";

// Importamos as funções que queremos testar
import { somar, subtrair, multiplicar, dividir } from "./calculadora";

// 'describe' cria um grupo de testes relacionados
describe("Calculadora", () => {

  describe("somar", () => {
    test("soma dois números positivos", () => {
      const a = 5; const b = 3;
      const resultado = somar(a, b);
      expect(resultado).toBe(8);
    });
  });

  describe("dividir", () => {
    test("resultado pode ser decimal", () => {
      expect(dividir(10, 3)).toBeCloseTo(3.333, 2);
    });

    test("lança erro ao dividir por zero", () => {
      expect(() => dividir(10, 0)).toThrow("Não é possível dividir por zero");
    });
  });

});
