import { createContext, useState, useEffect } from "react";

export const OperationContext = createContext();

export function OperationContextProvider(props) {
	const numerosAUsar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	const simbolosAUsar = ["+", "-", "/", "*", "="];
	const [displayNumber, setdisplayNumber] = useState("0");
	const [currentSymbol, setcurrentSymbol] = useState("");
	const [displayList, setdisplayList] = useState([]);

	useEffect(() => {
		setdisplayList(displayNumber.split(""));
	}, [displayNumber]);

	//Encuentra los datos antes del simbolo y después el símbolo
	function encontrarValores() {
		const indexOfSymbol = displayList.indexOf(currentSymbol);
		const firstpart = displayList.splice("", indexOfSymbol);
		// Filtar falla cuando es la suma del mismo numero 2+2
		// falla con !firstpart.includes(e)
		const secondpart = displayList.filter((e) => {
			return e != currentSymbol;
		});
		return [JSON.parse(firstpart.join("")), JSON.parse(secondpart.join(""))];
	}

	function actualizarDisplay(valorNuevo) {
		const ultimoValor = displayNumber[displayNumber.length - 1];
		console.log("ultimo valor " + ultimoValor);
		console.log("display number " + displayNumber);
		console.log("display list ", displayList);

		// Cuando preciona una operación y ya hay una en display
		// o preciona el simbolo igual
		if (valorNuevo == "=") {
			if (displayNumber == "0") {
				setdisplayNumber(() => displayNumber);
				return;
			}
			const valores = encontrarValores();
			if (currentSymbol == "+") {
				setdisplayNumber(() => sumar(valores[0], valores[1]));
				return;
			}
			if (currentSymbol == "-") {
				setdisplayNumber(() => restar(valores[0], valores[1]));
				return;
			}
		}

		// Caso el valor es 0 y preciona alguna operación
		if (simbolosAUsar.includes(valorNuevo) && displayNumber == "0") {
			setdisplayNumber(() => "0");
			return;
		}

		// Caso preciona un número y luego una operación
		if (
			!simbolosAUsar.includes(ultimoValor) ||
			!simbolosAUsar.includes(valorNuevo)
		) {
			if (displayNumber == "0") {
				setdisplayNumber(() => valorNuevo);
				return;
			}
			if (simbolosAUsar.includes(valorNuevo)) {
				setcurrentSymbol(valorNuevo);
				setdisplayNumber(() => displayNumber + valorNuevo);
				return;
			}
			setdisplayNumber(() => displayNumber + valorNuevo);
			return;
		}
	}

	function sumar(valor1, valor2) {
		return JSON.stringify(valor1 + valor2);
	}

	function restar(valor1, valor2) {
		return JSON.stringify(valor1 - valor2);
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
			value={{ displayNumber, actualizarDisplay, numerosAUsar, simbolosAUsar }}
		>
			{props.children}
		</OperationContext.Provider>
	);
}
