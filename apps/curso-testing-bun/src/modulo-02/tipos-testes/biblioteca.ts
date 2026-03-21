// ─── Tipos ───────────────────────────────────────────────────────────────────

export interface Livro {
	id: number;
	titulo: string;
	autor: string;
	disponivel: boolean;
}

export interface Emprestimo {
	livroId: number;
	utilizador: string;
	dataEmprestimo: Date;
}

// ─── Função pura ──────────────────────────────────────────────────────────────

/**
 * Calcula a multa por atraso.
 * @param dias   Número de dias de atraso (deve ser >= 0)
 * @param preco  Preço base da multa por dia (deve ser > 0)
 * @returns      Valor total da multa
 */
export function calcularMulta(dias: number, preco: number): number {
	if (dias < 0) throw new Error("Dias não pode ser negativo");
	if (preco <= 0) throw new Error("Preço deve ser maior que zero");
	return dias * preco;
}

// ─── Serviço ──────────────────────────────────────────────────────────────────

const acervo: Livro[] = [
	{ id: 1, titulo: "Clean Code", autor: "Robert C. Martin", disponivel: true },
	{
		id: 2,
		titulo: "The Pragmatic Programmer",
		autor: "Hunt & Thomas",
		disponivel: true,
	},
	{
		id: 3,
		titulo: "You Don't Know JS",
		autor: "Kyle Simpson",
		disponivel: true,
	},
];

const emprestimosAtivos: Emprestimo[] = [];

export const servicoBiblioteca = {
	/** Devolve todos os livros do acervo */
	buscar(): Livro[] {
		return acervo;
	},

	/** Marca livro como emprestado */
	emprestar(livroId: number, utilizador: string): Emprestimo {
		const livro = acervo.find((l) => l.id === livroId);

		if (!livro) throw new Error(`Livro ${livroId} não encontrado`);
		if (!livro.disponivel)
			throw new Error(`Livro "${livro.titulo}" já está emprestado`);

		livro.disponivel = false;

		const emprestimo: Emprestimo = {
			livroId,
			utilizador,
			dataEmprestimo: new Date(),
		};

		emprestimosAtivos.push(emprestimo);
		return emprestimo;
	},

	/** Marca livro como devolvido */
	devolver(livroId: number): void {
		const livro = acervo.find((l) => l.id === livroId);

		if (!livro) throw new Error(`Livro ${livroId} não encontrado`);
		if (livro.disponivel)
			throw new Error(`Livro "${livro.titulo}" não está emprestado`);

		livro.disponivel = true;

		const idx = emprestimosAtivos.findIndex((e) => e.livroId === livroId);
		if (idx !== -1) emprestimosAtivos.splice(idx, 1);
	},
};
