import { createContext, useState } from "react";

export const OperationContext = createContext();

export function OperationContextProvider(props) {
	const numerosAUsar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	const simbolosAUsar = ["+", "-", "/", "*", "="];
	const [displayNumber, setdisplayNumber] = useState("0");
	const [currentSymbol, setcurrentSymbol] = useState("");

	//Encuentra los datos antes del simbolo y después el símbolo
	function encontrarValores(listaDisplay) {
		const indexOfSymbol = listaDisplay.indexOf(currentSymbol);
		const firstpart = listaDisplay.splice("", indexOfSymbol);
		const secondpart = listaDisplay.filter((e) => {
			return !firstpart.includes(e) && e != currentSymbol;
		});
		if(firstpart.length==0){
			return [0, JSON.parse(secondpart.join(""))];
		}
		else if (secondpart.length==0){
			return [JSON.parse(firstpart.join("")),9];
		}
		return [JSON.parse(firstpart.join("")), JSON.parse(secondpart.join(""))];
	}

	function actualizarDisplay(valorNuevo) {
		const ultimoValor = displayNumber[displayNumber.length - 1];
		const listaDisplay = displayNumber.split("");
		console.log("display number " + displayNumber);
		console.log("ultimo valor " + ultimoValor);
		// Darle una funcionalidad totalmente distinta a =
		setdisplayNumber(() => {
			// Cuando preciona una operación y ya hay una en display
			// o preciona el simbolo igual
			if (valorNuevo == "=") {
				if (displayNumber == "0") {
					return displayNumber;
				}
				const valores = encontrarValores(listaDisplay);
				if (currentSymbol == "+") {
					return sumar(valores[0], valores[1]);
				} 
				// else if (currentSymbol == "-") {
				// 	return restar(valores[0], valores[1]);
				// } else if (currentSymbol == "/") {
				// 	return dividir(valores[0], valores[1]);
				// } else if (currentSymbol == "*") {
				// 	return multiplicar(valores[0], valores[1]);
				// }
			}

			// Caso el valor es 0 y preciona alguna operación
			if (simbolosAUsar.includes(valorNuevo) && displayNumber == "0") {
				return "0";
			}

			// Caso preciona un número y luego una operación
			if (
				!simbolosAUsar.includes(ultimoValor) ||
				!simbolosAUsar.includes(valorNuevo)
			) {
				if (displayNumber == "0") {
					return valorNuevo;
				}
				if (simbolosAUsar.includes(valorNuevo)) {
					setcurrentSymbol(valorNuevo);
					return displayNumber + valorNuevo;
				}
				return displayNumber + valorNuevo;
			} else {
				return displayNumber;
			}
		});
	}

	function sumar(valor1, valor2) {
		return valor1 + valor2;
	}

	function restar(valor1, valor2) {
		console.log("restando");
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
