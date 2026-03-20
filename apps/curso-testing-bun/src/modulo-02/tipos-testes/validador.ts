export function validarNome(nome: string): string | null {
	if (nome.length < 2) {
		return "Nome deve ter pelo menos 2 caracteres";
	}
	return null;
}

export function validarEmail(email: string): string | null {
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!regex.test(email)) {
		return "Email inválido";
	}
	return null;
}

export function validarIdade(idade: number): string | null {
	if (idade < 18) {
		return "Deve ter pelo menos 18 anos";
	}
	return null;
}
