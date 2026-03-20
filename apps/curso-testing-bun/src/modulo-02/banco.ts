//export type TContaBancaria
export type TContaBancaria = {
	readonly titular: string;
	depositar: (valor: number) => void;
	levantar: (valor: number) => void;
	getSaldo: () => number;
	getTitular: () => string;
};

export class ContaBancaria {
	private saldo: number;
	readonly titular: string;

	constructor(titular: string, saldoInicial: number) {
		this.titular = titular;

		if (saldoInicial < 0) {
			throw new Error("Saldo inicial não pode ser negativo");
		}
		this.saldo = saldoInicial;
	}

	// lança erro se valor <= 0
	depositar(valor: number): void {
		if (valor <= 0)
			throw new Error("Valor de depósito deve ser maior que zero");
		this.saldo += valor;
	}

	// lança erro se saldo insuficiente
	levantar(valor: number): void {
		if (valor > this.saldo) {
			throw new Error("Valor de levantamento não pode ser negativo");
		}

		if (valor < 0) {
			throw new Error("Valor de levantamento não pode ser negativo");
		}

		this.saldo -= valor;
	}

	// lança erro se valor <= 0
	getSaldo(): number {
		if (this.saldo < 0) {
			throw new Error("Saldo não pode ser negativo");
		}
		return this.saldo;
	}

	getTitular(): string {
		return this.titular;
	}
}
