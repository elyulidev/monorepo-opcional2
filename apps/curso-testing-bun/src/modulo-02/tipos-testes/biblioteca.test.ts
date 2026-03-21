import { beforeEach, describe, expect, test } from "bun:test";
import { calcularMulta, servicoBiblioteca } from "./biblioteca";

// ─── Testes unitários: calcularMulta ─────────────────────────────────────────

describe("calcularMulta()", () => {
	test("deve retornar 0 quando não há atraso", () => {
		expect(calcularMulta(0, 5)).toBe(0);
	});

	test("deve calcular multa corretamente para vários dias", () => {
		expect(calcularMulta(3, 10)).toBe(30);
		expect(calcularMulta(7, 2.5)).toBe(17.5);
	});

	test("deve lançar erro se dias for negativo", () => {
		expect(() => calcularMulta(-1, 5)).toThrow("Dias não pode ser negativo");
	});

	test("deve lançar erro se preço for zero ou negativo", () => {
		expect(() => calcularMulta(5, 0)).toThrow("Preço deve ser maior que zero");
		expect(() => calcularMulta(5, -3)).toThrow("Preço deve ser maior que zero");
	});
});

// ─── Testes de integração: servicoBiblioteca ──────────────────────────────────

describe("servicoBiblioteca", () => {
	// Restaura disponibilidade antes de cada teste
	beforeEach(() => {
		// Devolve qualquer livro que possa ter ficado emprestado
		servicoBiblioteca.buscar().forEach((livro) => {
			if (!livro.disponivel) {
				servicoBiblioteca.devolver(livro.id);
			}
		});
	});

	test("buscar() deve retornar todos os livros do acervo", () => {
		const livros = servicoBiblioteca.buscar();

		expect(livros.length).toBeGreaterThan(0);
		expect(livros[0]).toMatchObject({ id: 1, titulo: "Clean Code" });
	});

	test("emprestar() deve marcar livro como indisponível", () => {
		const emprestimo = servicoBiblioteca.emprestar(1, "Ana Joaquim");

		expect(emprestimo).toMatchObject({ livroId: 1, utilizador: "Ana Joaquim" });

		const livro = servicoBiblioteca.buscar().find((l) => l.id === 1);
		expect(livro?.disponivel).toBe(false);
	});

	test("emprestar() deve lançar erro se livro já estiver emprestado", () => {
		servicoBiblioteca.emprestar(2, "Carlos Muié");

		expect(() => servicoBiblioteca.emprestar(2, "Outro Utilizador")).toThrow(
			"já está emprestado",
		);
	});

	test("devolver() deve tornar o livro disponível novamente", () => {
		servicoBiblioteca.emprestar(3, "Beatriz Santos");
		servicoBiblioteca.devolver(3);

		const livro = servicoBiblioteca.buscar().find((l) => l.id === 3);
		expect(livro?.disponivel).toBe(true);
	});
});
