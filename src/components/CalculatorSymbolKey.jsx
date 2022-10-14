import { useContext } from "react";
import { OperationContext } from "../context/OperationContext";

function CalculatorSymbolKey({ valorTecla }) {
	const { actualizarDisplay } = useContext(OperationContext);

	return (
		<button onClick={() => actualizarDisplay(valorTecla)}>{valorTecla}</button>
	);
}

export default CalculatorSymbolKey;
