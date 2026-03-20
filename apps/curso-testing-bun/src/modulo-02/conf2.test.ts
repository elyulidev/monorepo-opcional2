import { beforeEach, describe, expect, test } from "bun:test";
import {
	type Carrinho,
	calcularTotal,
	contarItens,
	removerProduto,
} from "./conf2";

describe("Carrinho de compras", () => {
	let carrinho: Carrinho;

	beforeEach(() => {
		// Cada teste começa com um carrinho fresco
		carrinho = {
			produtos: [
				{ nome: "Caderno", preco: 500, quantidade: 2 },
				{ nome: "Caneta", preco: 100, quantidade: 3 },
			],
		};
	});

	test("calcula o total corretamente", () => {
		expect(calcularTotal(carrinho)).toBe(1300);
	});

	test("conta os itens corretamente", () => {
		expect(contarItens(carrinho)).toBe(5);
	});

	test("remove produto do carrinho", () => {
		const carrinho = {
			produtos: [
				{ nome: "Caderno", preco: 500, quantidade: 2 },
				{ nome: "Caneta", preco: 100, quantidade: 3 },
			],
		};
		const resultado = removerProduto(carrinho, "Caderno");
		expect(resultado.produtos).toHaveLength(1);
	});
});

/* test("calcula o total corretamente", () => {
	const carrinho = {
		produtos: [
			{ nome: "Caderno", preco: 500, quantidade: 2 },
			{ nome: "Caneta", preco: 100, quantidade: 3 },
		],
	};
	expect(calcularTotal(carrinho)).toBe(1300);
});

test("conta os itens corretamente", () => {
	const carrinho = {
		produtos: [
			{ nome: "Caderno", preco: 500, quantidade: 2 },
			{ nome: "Caneta", preco: 100, quantidade: 3 },
		],
	};
	expect(contarItens(carrinho)).toBe(5);
});

test("remove produto do carrinho", () => {
	const carrinho = {
		produtos: [
			{ nome: "Caderno", preco: 500, quantidade: 2 },
			{ nome: "Caneta", preco: 100, quantidade: 3 },
		],
	};
	const resultado = removerProduto(carrinho, "Caderno");
	expect(resultado.produtos).toHaveLength(1);
}); */
