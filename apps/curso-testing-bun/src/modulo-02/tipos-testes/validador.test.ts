// src/modulo-02/tipos-testes/validador.test.ts
import { describe, expect, test } from "bun:test";
import { validarEmail, validarIdade, validarNome } from "./validador";

describe("validarNome", () => {
	test("retorna null para nome válido", () => {
		expect(validarNome("Ana Ferreira")).toBeNull();
	});

	test("retorna erro para nome muito curto", () => {
		const erro = validarNome("A");
		expect(erro).toBe("Nome deve ter pelo menos 2 caracteres");
	});
});

describe("validarIdade", () => {
	test("retorna erro para menor de 18 anos", () => {
		expect(validarIdade(17)).toBe("Deve ter pelo menos 18 anos");
	});
});
