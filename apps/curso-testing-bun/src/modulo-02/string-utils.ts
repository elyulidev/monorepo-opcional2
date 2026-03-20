export function capitalizar(texto: string): string {
	if (texto.length === 0) throw new Error("Texto vazio");

	const palavras = texto.split(" ");
	const palavrasCapitalizadas = palavras.map((palavra) => {
		return palavra.charAt(0).toUpperCase() + palavra.slice(1);
	});
	return palavrasCapitalizadas.join(" ");
}

export function inverter(texto: string): string {
	if (texto.length === 0) throw new Error("Texto vazio");
	return texto.split("").reverse().join("");
}

export function contarPalavras(texto: string) {
	const palavras = texto.trim().split(/\s+/);
	return palavras.length;
}
