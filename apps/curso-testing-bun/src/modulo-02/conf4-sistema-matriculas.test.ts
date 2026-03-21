import { beforeEach, describe, expect, test } from "bun:test";
import { type Aluno, DISCIPLINAS, Matricula } from "./conf4-sistema-matriculas";

describe("Matricula", () => {
	let matricula: Matricula;
	beforeEach(() => {
		// Limpa o estado global antes de cada teste
		DISCIPLINAS.values.forEach((d) => {
			d.alunosMatriculados = [];
		});
		matricula = new Matricula(DISCIPLINAS);
	});

	describe("matricularAluno", () => {
		test("matricular aluno numa disciplina corretamente", () => {
			//Arrange
			const aluno = { bi: "123456", nome: "João" };

			//Act
			matricula.matricularAluno(aluno, ["Matemática"]);
			const disciplina = DISCIPLINAS.values.find(
				(d) => d.nome === "Matemática",
			);
			const alunoMatriculado = disciplina?.alunosMatriculados.find(
				(a) => a.bi === aluno.bi,
			);

			//Assert
			expect(disciplina?.alunosMatriculados).toContain(aluno);
			expect(alunoMatriculado).toEqual(aluno);
		});

		test("matricular aluno em várias disciplinas (limite de 5) correctamente", () => {
			const aluno: Aluno = { bi: "123", nome: "Ana" };
			const seleccionadas = [
				"Matemática",
				"Português",
				"Ciências",
				"História",
				"Geografia",
			];

			matricula.matricularAluno(aluno, seleccionadas);

			seleccionadas.forEach((nome) => {
				const disc = DISCIPLINAS.values.find((d) => d.nome === nome);
				expect(disc?.alunosMatriculados).toContainEqual(aluno);
			});
		});

		test("não deve permitir mais de 30 alunos em uma disciplina", () => {
			const disciplinaNome = "Matemática";
			const disciplina = DISCIPLINAS.values.find(
				(d) => d.nome === disciplinaNome,
			);

			// 1. Forçamos a disciplina a ficar cheia (30 alunos)
			for (let i = 0; i < 30; i++) {
				disciplina?.alunosMatriculados.push({
					bi: `BI${i}`,
					nome: `Aluno ${i}`,
				});
			}

			// 2. Tentamos matricular o 31º
			const alunoExtra = { bi: "999", nome: "Intruso" };
			matricula.matricularAluno(alunoExtra, [disciplinaNome]);

			// 3. Assert: O tamanho ainda deve ser 30
			expect(disciplina?.alunosMatriculados.length).toBe(30);
			expect(disciplina?.alunosMatriculados).not.toContainEqual(alunoExtra);
		});

		test("lança erro se tentar matricular um aluno sem os campos necessários", () => {
			const alunoIncompleto = { nome: "Ana" } as Aluno;
			const seleccionadas = ["Matemática"];

			expect(() =>
				matricula.matricularAluno(alunoIncompleto, seleccionadas),
			).toThrow("Todos os campos são obrigatórios para criar uma matrícula.");
		});

		test("lança error se tentar matricular aluno em nehuma disciplina", () => {
			const aluno: Aluno = { bi: "123", nome: "Ana" };
			const seleccionadas: unknown[] = [];

			expect(() =>
				matricula.matricularAluno(aluno, seleccionadas as string[]),
			).toThrow("O aluno deve ser matriculado em pelo menos uma disciplina.");
		});

		test("lança error se tentar matricular aluno numa disciplina que não existe", () => {
			const aluno: Aluno = { bi: "123", nome: "Ana" };
			const seleccionadas = [
				"Matemática",
				"Espanhol",
				"Ciências",
				"História",
				"Geografia",
			];

			expect(() => matricula.matricularAluno(aluno, seleccionadas)).toThrow(
				"Uma ou mais disciplinas não foram encontradas.",
			);
		});

		test("lança error se tentar matricular aluno em mais de 5 disciplinas", () => {
			const aluno: Aluno = { bi: "123", nome: "Ana" };
			const seleccionadas = [
				"Matemática",
				"Português",
				"Ciências",
				"História",
				"Geografia",
				"Inglês",
			];

			expect(() => matricula.matricularAluno(aluno, seleccionadas)).toThrow(
				"O aluno não pode ser matriculado em mais de cinco disciplinas.",
			);
		});
	});

	describe("taxaOcupacao", () => {
		test("calcula a taxa de ocupação de uma disciplina corretamente", () => {
			const disciplinaNome = "Matemática";

			// Matricular 15 alunos na disciplina
			for (let i = 0; i < 15; i++) {
				matricula.matricularAluno({ bi: `123${i}`, nome: `Aluno ${i}` }, [
					disciplinaNome,
				]);
			}

			const taxa = matricula.taxaOcupacao(disciplinaNome);
			expect(taxa).toBe(50); // 15 alunos em uma disciplina com capacidade de 30
		});

		test("lança error se tentar calcular a taxa de ocupação de uma disciplina que não se fornece", () => {
			expect(() => matricula.taxaOcupacao("")).toThrow(
				"Nome da disciplina é obrigatório.",
			);
		});

		test("lança error se tentar calcular a taxa de ocupação de uma disciplina que não existe", () => {
			expect(() => matricula.taxaOcupacao("Espanhol")).toThrow(
				"Disciplina não encontrada.",
			);
		});
	});
});
