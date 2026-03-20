import { describe, expect, test } from "bun:test";
import { capitalizar, contarPalavras, inverter } from "./string-utils";

describe("String Utils", () => {
	describe("Função capitalizar", () => {
		test("Deve capitalizar corretamente com uma palavra", () => {
			expect(capitalizar("hello")).toBe("Hello");
		});

		test("Deve capitalizar corretamente com mais de uma palavra", () => {
			expect(capitalizar("hello world")).toBe("Hello World");
		});

		test("deve lanzar error para texto vacío", () => {
			expect(() => capitalizar("")).toThrow("Texto vazio");
		});
	});

	describe("Contar Palavras", () => {
		test("Deve contar corretamente o número de palavras", () => {
			expect(contarPalavras("Hello world")).toBe(2);
		});

		test("Deve contar corretamente com múltiplos espaços", () => {
			expect(contarPalavras(" Hello   world")).toBe(2);
		});
	});

	describe("Invertir Palabra", () => {
		test("Invertir palabra correctamente", () => {
			const invertida = inverter("abc");
			expect(invertida).toBe("cba");
		});

		test("Invertir texto con varias palabras", () => {
			const invertida = inverter("abc abs");
			expect(invertida).toBe("sba cba");
		});

		test("Invertir palabra con string vazio lanza error", () => {
			expect(() => inverter("")).toThrow("Texto vazio");
		});
	});
});
