// Clase para asociar un simbolo con una oepración
export class Operation {
	constructor(symbol, operational, operationName) {
		this.symbol = symbol;
		this.operational = operational
		this.operationName = operationName 
	}
	callOperation(valor1, valor2) {
		this.operationName(valor1, valor2);
	}
	toString(){
		return this.symbol
	}
}

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