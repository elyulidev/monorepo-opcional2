// banco.test.ts
import { beforeEach, describe, expect, test } from "bun:test";
import { ContaBancaria, type TContaBancaria } from "./banco";

describe("ContaBancaria", () => {
	let conta: TContaBancaria;

	beforeEach(() => {
		conta = new ContaBancaria("João", 0);
	});

	describe("ao depositar", () => {
		test("deve aumentar o saldo com valor positivo", () => {
			conta.depositar(100);
			expect(conta.getSaldo()).toBe(100);
		});

		test("deve lançar erro com valor negativo", () => {
			expect(() => conta.depositar(-100)).toThrow(
				"Valor de depósito deve ser maior que zero",
			);
		});

		test("deve lançar erro com valor zero", () => {
			expect(() => conta.depositar(0)).toThrow(
				"Valor de depósito deve ser maior que zero",
			);
		});

		test.todo("deve emitir evento após depósito bem-sucedido", () => {});
	});

	describe("ao levantar", () => {
		test("deve reduzir o saldo corretamente", () => {
			conta.depositar(100);
			conta.levantar(60);
			expect(conta.getSaldo()).toBe(40);
		});

		test("deve lançar erro com valor negativo", () => {
			expect(() => conta.levantar(-50)).toThrow(
				"Valor de levantamento não pode ser negativo",
			);
		});

		test.todo("deve registar histórico de levantamentos", () => {});
	});

	describe("saldo insuficiente", () => {
		test("deve lançar erro ao levantar mais do que o saldo", () => {
			conta.depositar(100);
			expect(() => conta.levantar(150)).toThrow(
				"Valor de levantamento não pode ser negativo",
			);
		});

		test("deve lançar erro ao levantar de conta com saldo zero", () => {
			expect(() => conta.levantar(1)).toThrow(
				"Valor de levantamento não pode ser negativo",
			);
		});
	});
});
