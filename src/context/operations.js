// Clase para asociar un simbolo con una oepración
class Operation {
	constructor(symbol, operational, operationName) {
		this.symbol = symbol;
		this.operational = operational;
		this.operationName = operationName;
	}
	callOperation(valor1, valor2) {
		this.operationName(valor1, valor2);
	}
	toString() {
		return this.symbol;
	}
}

// Recibe dos números y devuelve su suma
const sumar = (valor1, valor2) => {
	return valor1 + valor2;
};

// Recibe dos números y devuelve su resta
const restar = (valor1, valor2) => {
	return valor1 - valor2;
};

// Recibe dos números y devuelve su multiplicación
const multiplicar = (valor1, valor2) => {
	return valor1 * valor2;
};

// Recibe dos números y devuelve su división
const dividir = (valor1, valor2) => {
	const operacion = valor1 / valor2;
	if (operacion != Infinity) {
		return operacion;
	} else {
		alert("No se puede dividir por 0");
		return 0;
	}
};

// Lista de objetos con simbolos y callback a las funcioens individuales
// se usará para los botones y para el funcionamiento
// El símbolo Igual siempre será el último (así se ve mejor en el tablero)
export const simbolosAUsar = [
	new Operation("", false),
	new Operation("+", true, sumar),
	new Operation("-", true, restar),
	new Operation("*", true, multiplicar),
	new Operation("/", true, dividir),
	new Operation("=", true),
];
