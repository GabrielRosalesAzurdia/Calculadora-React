// Recibe dos números y devuelve su suma
export const sumar = (valor1, valor2) => {
	return valor1 + valor2;
};

// Recibe dos números y devuelve su resta
export const restar = (valor1, valor2) => {
	return valor1 - valor2;
};

// Recibe dos números y devuelve su multiplicación
export const multiplicar = (valor1, valor2) => {
	return valor1 * valor2;
};

// Recibe dos números y devuelve su división
export const dividir = (valor1, valor2) => {
	const operacion = valor1 / valor2;
	if (operacion != Infinity) {
		return operacion;
	} else {
		alert("No se puede dividir por 0");
		return 0;
	}
};

export const elevadoCuadrado = (valor1) => {
	return valor1 * valor1;
};

export const raizCuadrada = (valor1) => {
	return Math.sqrt(valor1);
};
