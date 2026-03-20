import { describe, expect, test } from "bun:test";
import { calcularMedia, determinarSituacao } from "./conf1-gestao-notas";

describe("Gestión de notas", () => {
	test("Calcular media de notas correctamente", () => {
		const notas = [10, 15, 20];
		const media = calcularMedia(notas);
		expect(media).toBe(15);
	});

	test("Determinar situación de un alumno aprobado", () => {
		const resultadoAprovado = determinarSituacao(15);
		expect(resultadoAprovado).toBe("Aprovado");
	});

	test("Determinar situación de un alumno reprovado", () => {
		const resultadoReprovado = determinarSituacao(8);
		expect(resultadoReprovado).toBe("Reprovado");
	});

	test("Determinar situación con media inválida", () => {
		expect(() => determinarSituacao(-5)).toThrow("Média inválida");
		expect(() => determinarSituacao(25)).toThrow("Média inválida");
	});
});
