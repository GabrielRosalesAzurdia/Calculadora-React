import { createContext, useState, useEffect } from "react";

export const OperationContext = createContext();

// IDEA: cambiar el displaynumber de string a un array que siemper maneje datos
// de esa manera para facilitar el manejo de weas

export function OperationContextProvider(props) {
	const numerosAUsar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	const simbolosAUsar = ["+", "-", "/", "*", "="];
	const [currentSymbol, setcurrentSymbol] = useState("");
	const [displayList, setdisplayList] = useState([0]);

	//Encuentra los datos antes del simbolo y después el símbolo
	function encontrarValores() {
		const indexOfSymbol = displayList.indexOf(currentSymbol);
		const firstpart = displayList.splice("", indexOfSymbol);
		// Filtar falla cuando es la suma del mismo numero 2+2
		// falla con !firstpart.includes(e)
		const secondpart = displayList.filter((e) => {
			return e != currentSymbol;
		});
		return [firstpart[0], secondpart[0]];
	}

	function actualizarDisplay(valorNuevo) {
		const ultimoValor = displayList[displayList.length - 1];
		const checkIfDefault = (displayList[0] == 0 && displayList.length == 1);
		console.log("display list ", displayList);

		// Cuando preciona una operación y ya hay una en display
		// o preciona el simbolo igual
		if (valorNuevo == "=") {
			if (checkIfDefault) {
				setdisplayList(() => displayList);
				return;
			}
			const valores = encontrarValores();
			if (currentSymbol == "+") {
				setdisplayList(() => [sumar(valores[0], valores[1])]);
				return;
			}
			if (currentSymbol == "-") {
				setdisplayList(() => [restar(valores[0], valores[1])]);
				return;
			}
		}

		// Caso el valor es 0 y preciona alguna operación
		if (simbolosAUsar.includes(valorNuevo) && checkIfDefault) {
			setdisplayList(() => [0]);
			return;
		}

		// Caso preciona un número y luego una operación
		if (
			!simbolosAUsar.includes(ultimoValor) ||
			!simbolosAUsar.includes(valorNuevo)
		) {
			if (checkIfDefault) {
				setdisplayList(() => [valorNuevo]);
				return;
			}
			if (simbolosAUsar.includes(valorNuevo)) {
				setcurrentSymbol(valorNuevo);
				setdisplayList(()=>[...displayList, valorNuevo])
				return;
			}
			setdisplayList(()=>[...displayList, valorNuevo])
			return;
		}
	}

	function sumar(valor1, valor2) {
		return valor1 + valor2;
	}

	function restar(valor1, valor2) {
		return valor1 - valor2;
	}

	function dividir(valor1, valor2) {
		console.log("dividiendo");
	}

	function multiplicar(valor1, valor2) {
		console.log("multiplicando");
	}

	function igual() {
		console.log("igual");
	}

	return (
		<OperationContext.Provider
			value={{ displayList, actualizarDisplay, numerosAUsar, simbolosAUsar }}
		>
			{props.children}
		</OperationContext.Provider>
	);
}
