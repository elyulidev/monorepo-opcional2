// src/modulo-01/gestao-notas.ts

export interface Aluno {
  nome: string;
  notas: number[];
}

export function calcularMedia(notas: number[]): number {
  if (notas.length === 0) return 0;
  const soma = notas.reduce((acc, nota) => acc + nota, 0);
  return soma / notas.length;
}

export function determinarSituacao(media: number): string {
  if (media < 0 || media > 20) throw new Error("Média inválida");
  if (media >= 9.5) return "Aprovado";
  return "Reprovado";
}
