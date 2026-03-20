import { describe, expect, test } from "bun:test";
import { celsiusParaFahrenheit } from "./conversor";

describe("Conversor de Temperatura", () => {
	test("Converter 0°C (deve dar 32°F)", () => {
		const resultado = celsiusParaFahrenheit(0);
		expect(resultado).toBe(32);
	});

	test("Converter 100°C (deve dar 212°F)", () => {
		const resultado = celsiusParaFahrenheit(100);
		expect(resultado).toBe(212);
	});

	test("Converter -40°C (deve dar -40°F)", () => {
		const resultado = celsiusParaFahrenheit(-40);
		expect(resultado).toBe(-40);
	});

	test("Converter 37°C (deve dar 98.6°F)", () => {
		const resultado = celsiusParaFahrenheit(37);
		expect(resultado).toBeCloseTo(98.6, 1);
	});
});
