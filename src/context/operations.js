// Recibe dos números y devuelve su suma
export function sumar(valor1, valor2) {
	return valor1 + valor2;
}

// Recibe dos números y devuelve su resta
export function restar(valor1, valor2) {
	return valor1 - valor2;
}

// Recibe dos números y devuelve su multiplicación
export function multiplicar(valor1, valor2) {
	return valor1 * valor2;
}

// Recibe dos números y devuelve su división
export function dividir(valor1, valor2) {
	const operacion = valor1 / valor2;
	if (operacion != Infinity) {
		return operacion;
	} else {
		alert("No se puede dividir por 0");
		return 0;
	}
}
