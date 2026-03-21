// src/modulo-02/gestao-estudantes.ts

export interface Disciplina {
	nome: string;
	notaFrequencia: number; // 0 a 20
	notaExame: number; // 0 a 20
	presenca: number; // 0 a 100 (percentagem)
}

// A nota final é calculada como: frequência × 40% + exame × 60%
// O estudante está aprovado se a nota final for ≥ 9.5 e a presença for ≥ 75%

export function calcularNotaFinal(
	notaFrequencia: number,
	notaExame: number,
): number {
	if (notaFrequencia < 0 || notaFrequencia > 20)
		throw new Error("Frequência inválida");
	if (notaExame < 0 || notaExame > 20) throw new Error("Exame inválido");

	const resultado = notaFrequencia * 0.4 + notaExame * 0.6;
	return Math.round(resultado * 10) / 10;
}

export function determinarSituacaoDisciplina(
	notaFinal: number,
	presenca: number,
): string {
	if (presenca < 75) return "Reprovado por Falta";
	return notaFinal >= 9.5 ? "Aprovado" : "Reprovado";
}
