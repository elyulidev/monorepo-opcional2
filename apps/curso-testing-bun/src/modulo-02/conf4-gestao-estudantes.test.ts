// src/modulo-02/gestao-estudantes.test.ts
import { describe, expect, test } from "bun:test";
import {
	calcularNotaFinal,
	determinarSituacaoDisciplina,
} from "./conf4-gestao-estudantes";

describe("calcularNotaFinal", () => {
	test("aplica a fórmula 40/60 corretamente", () => {
		expect(calcularNotaFinal(10, 10)).toBe(10);
	});

	test("lança erro para entradas negativas", () => {
		expect(() => calcularNotaFinal(-1, 10)).toThrow("Frequência inválida");
	});
});

describe("determinarSituacaoDisciplina", () => {
	test("reprova por falta mesmo com nota 20", () => {
		expect(determinarSituacaoDisciplina(20, 50)).toBe("Reprovado por Falta");
	});

	test("aprova com nota 9.5 e presença 75%", () => {
		expect(determinarSituacaoDisciplina(9.5, 75)).toBe("Aprovado");
	});
});
