export type Aluno = {
	bi: string;
	nome: string;
};
export type Disciplina = {
	nome: string;
	alunosMatriculados: Aluno[];
};

export type Disciplinas = {
	keys: string[];
	values: Disciplina[];
};

export const DISCIPLINAS: Disciplinas = {
	keys: [
		"Matemática",
		"Português",
		"Ciências",
		"História",
		"Geografia",
		"Inglês",
		"Educação Física",
		"Artes",
	],
	values: [
		{ nome: "Matemática", alunosMatriculados: [] },
		{ nome: "Português", alunosMatriculados: [] },
		{ nome: "Ciências", alunosMatriculados: [] },
		{ nome: "História", alunosMatriculados: [] },
		{ nome: "Geografia", alunosMatriculados: [] },
		{ nome: "Inglês", alunosMatriculados: [] },
		{ nome: "Educação Física", alunosMatriculados: [] },
		{ nome: "Artes", alunosMatriculados: [] },
	],
};

export class Matricula {
	constructor(private disciplinas: Disciplinas = DISCIPLINAS) {}

	public matricularAluno(aluno: Aluno, discs: string[]): void {
		if (!aluno.bi || !aluno.nome) {
			throw new Error(
				"Todos os campos são obrigatórios para criar uma matrícula.",
			);
		}
		if (discs.length === 0) {
			throw new Error(
				"O aluno deve ser matriculado em pelo menos uma disciplina.",
			);
		}
		if (discs.length > 5) {
			throw new Error(
				"O aluno não pode ser matriculado em mais de cinco disciplinas.",
			);
		}

		if (!discs.every((disc) => this.disciplinas.keys.includes(disc)))
			throw new Error("Uma ou mais disciplinas não foram encontradas.");

		this.disciplinas.values.forEach((d) => {
			if (discs.includes(d.nome) && d.alunosMatriculados.length < 30) {
				d.alunosMatriculados.push(aluno);
			}
		});
	}

	taxaOcupacao(disciplinaNome: string): number {
		if (!disciplinaNome) {
			throw new Error("Nome da disciplina é obrigatório.");
		}

		const disciplina = this.disciplinas.values.find(
			(d) => d.nome === disciplinaNome,
		);
		if (!disciplina) {
			throw new Error("Disciplina não encontrada.");
		}

		return (disciplina.alunosMatriculados.length / 30) * 100;
	}
}
