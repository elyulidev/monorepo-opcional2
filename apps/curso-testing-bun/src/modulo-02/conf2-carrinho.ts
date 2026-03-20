// src/modulo-01/carrinho.ts

export interface Produto {
	nome: string;
	preco: number;
	quantidade: number;
}

export interface Carrinho {
	produtos: Produto[];
}

export function adicionarProduto(
	carrinho: Carrinho,
	produto: Produto,
): Carrinho {
	const existe = carrinho.produtos.find((p) => p.nome === produto.nome);
	if (existe) {
		return {
			produtos: carrinho.produtos.map((p) =>
				p.nome === produto.nome
					? { ...p, quantidade: p.quantidade + produto.quantidade }
					: p,
			),
		};
	}
	return { produtos: [...carrinho.produtos, produto] };
}

export function removerProduto(
	carrinho: Carrinho,
	nomeProduto: string,
): Carrinho {
	return { produtos: carrinho.produtos.filter((p) => p.nome !== nomeProduto) };
}

export function calcularTotal(carrinho: Carrinho): number {
	return carrinho.produtos.reduce(
		(total, p) => total + p.preco * p.quantidade,
		0,
	);
}

export function contarItens(carrinho: Carrinho): number {
	return carrinho.produtos.reduce((total, p) => total + p.quantidade, 0);
}
