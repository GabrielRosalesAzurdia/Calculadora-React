import { createContext, useState, useEffect } from "react";

export const OperationContext = createContext();

export function OperationContextProvider(props) {
	// Lista de numeros a utilizar en los botones
	const numerosAUsar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,"."];
	// Lista de simbolos a utilizar en los botones
	const simbolosAUsar = ["+", "-", "/", "*", "="];
	// Lista de acciones que la calculadora puede hacer
	const acciones = ["RESET", "DELETE"];
	// Operación a realizar ahora
	const [currentSymbol, setcurrentSymbol] = useState("");
	// Elementos en la memoria de la calculadora
	const [displayList, setdisplayList] = useState([0]);

	// Fución que coloca a la lista de pantalla de la manera que comenzó
	// con un 0 como único dato
	function estadoInicial() {
		setdisplayList(() => [0]);
	}

	// Encuentra los datos antes del simbolo y después el símbolo de la operación
	// Devuelve la primera y segunda parte dentro de una array
	function encontrarValores() {
		const indexOfSymbol = displayList.indexOf(currentSymbol);
		const firstpart = displayList.splice("", indexOfSymbol);
		const secondpart = displayList.filter((e) => {
			return e != currentSymbol;
		});
		return [JSON.parse(firstpart.join("")), JSON.parse(secondpart.join(""))];
	}

	// Recibe dos números y devuelve su suma
	function sumar(valor1, valor2) {
		return valor1 + valor2;
	}

	// Recibe dos números y devuelve su resta
	function restar(valor1, valor2) {
		return valor1 - valor2;
	}

	// Recibe dos números y devuelve su multiplicación
	function multiplicar(valor1, valor2) {
		return valor1 * valor2;
	}

	// Recibe dos números y devuelve su división
	function dividir(valor1, valor2) {
		const operacion = valor1 / valor2;
		if (operacion != Infinity) {
			return operacion;
		} else {
			alert("No se puede dividir por 0");
			return 0;
		}
	}

	// Función encargada de dar el resultado de una operación
	function igual() {
		// Encuentra los valores antes y después del simbolo de la operacion
		const valores = encontrarValores();
		// Linea agregada para funcionalidad de dar rseultado antes de poner
		// otro simbolo, para quitar funcionalidad también quitar esta linea
		setcurrentSymbol(() => "");
		// Si es suma llama a suma y suma los números
		if (currentSymbol == "+") {
			return sumar(valores[0], valores[1]);
		}
		// Si es resta llama a resta y resta los númreos
		if (currentSymbol == "-") {
			return restar(valores[0], valores[1]);
		}
		// Si es multiplicación llama a moltiplicar y multiplica los números
		if (currentSymbol == "*") {
			return multiplicar(valores[0], valores[1]);
		}
		// Si es división llama a dividir y divide los números
		if (currentSymbol == "/") {
			return dividir(valores[0], valores[1]);
		}
	}

	// Actualiza los números en la memoria de la calcualdora
	function actualizarDisplay(valorNuevo) {
		// Último valor en la memoria de la calculadora
		const ultimoValor = displayList[displayList.length - 1];
		// Revisar si la calculadora está en sus valores de inicio
		const checkIfDefault = displayList[0] == 0 && displayList.length == 1;

		// Cuando se preciona la acción RESET regresa a su estado normal
		if (valorNuevo == "RESET") {
			estadoInicial();
			return;
		}

		// Cuando preciona la accion DELETE para borrar solo un elemento
		if (valorNuevo == "DELETE") {
			// Revisar estado del array para ver si es necesario regresar a 0
			// AL MOMENTO DE REALIZAR UNA OPERACIÓN Y OBTENER UN RESULTADO
			// SE QUEDA GUARDADO EN UNA SOLA POSICIÓN DEL ARRAY ENTONCES
			// TOMA COMO SI SOLO QUEDARA UN NÚMERO Y TODO LO REEMPLAZA POR 0
			// IMPLICA CAMBIAR EL COMO SE GUARDAN RESULTADOS
			// IDEA: JSON.STRINGIFY(numerocompelto) -> array.push(JSON.PARSE(x[posei]))
			if (displayList.length == 1) {
				estadoInicial();
				return;
			}
			// Borrar último elemento de la pantalla
			displayList.pop();
			setdisplayList(() => [...displayList]);
			console.log(displayList);
			return;
		}

		// Cuando preciona el simbolo igual se ejecuta para dar el resultado
		if (valorNuevo == "=") {
			// Si está en sus valores por efecto no cambia y devuelve 0
			if (checkIfDefault) {
				return;
			}
			// Si ya hay una operación entonces hace la operación y la coloca
			// en la memoria
			const resultado = [igual()];
			setdisplayList(() => resultado);
			return;
		}

		// Cuando preciona un simbolo pero el valor de la memoria es 0
		// no altera los datos
		if (simbolosAUsar.includes(valorNuevo) && checkIfDefault) {
			return;
		}

		// Revisa si el valor ingresado y el último en la memoria son simbolos
		if (
			!simbolosAUsar.includes(ultimoValor) ||
			!simbolosAUsar.includes(valorNuevo)
		) {
			// Si tiene sus valores por defecto entonces el valor de la
			// memoria será el nuevo número
			if (checkIfDefault) {
				setdisplayList(() => [valorNuevo]);
				return;
			}
			// Si el último valor de la memoria es un número y
			// el ingresado es un valor entonces define el simbolo
			// de la operación y mete el símbolo a la memoria
			if (simbolosAUsar.includes(valorNuevo)) {
				// Si el simbolo no ha sido etablecido solo lo agrega
				// a la operacion : 123+
				console.log(currentSymbol);
				if (currentSymbol == "") {
					setcurrentSymbol(valorNuevo);
					setdisplayList(() => [...displayList, valorNuevo]);
					return;
				}
				// Si el simbolo ya estoa entonces busca el resultado para
				// la operacion anterior primero y coloca el resultado
				// y el nuevo simbolo : 123+212 | 335 nuevosimbolo
				// para quitar esta funcion quitar el else y el if, dejar el
				// codigo del if
				else {
					const resultado = igual();
					console.log(resultado);
					setdisplayList(() => [resultado, valorNuevo]);
					setcurrentSymbol(() => valorNuevo);
					return;
				}
			}
			// Si es un número nuevo lo mete a la memoria
			setdisplayList(() => [...displayList, valorNuevo]);
			return;
		}
	}

	return (
		<OperationContext.Provider
			value={{
				displayList,
				actualizarDisplay,
				numerosAUsar,
				simbolosAUsar,
				acciones,
			}}
		>
			{props.children}
		</OperationContext.Provider>
	);
}
