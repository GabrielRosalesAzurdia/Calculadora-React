import { toast } from "react-hot-toast";

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
		toast.error("No se puede dividir por 0");
		return 0;
	}
};

export const elevadoCuadrado = (valor1, valor2) => {
	return valor2 * valor2;
};

export const raizCuadrada = (valor1, valor2) => {
	return Math.sqrt(valor2);
};
