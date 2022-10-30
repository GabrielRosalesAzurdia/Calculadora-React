import { useContext } from "react";
import { OperationContext } from "../context/OperationContext";

function CalculatorSymbolKey({ valorTecla }) {
	const { actualizarDisplay } = useContext(OperationContext);
	if (valorTecla == "=") {
		return (
			<button
				className="h-fit w-full  px-6 py-2 font-semibold text-white rounded btn bg-red-500"
				onClick={() => actualizarDisplay(valorTecla)}
			>
				{valorTecla}
			</button>
		);
	} else {
		return (
			<button
				className="px-6 py-2 font-semibold text-white rounded btn bg-cyan-500"
				onClick={() => actualizarDisplay(valorTecla)}
			>
				{valorTecla}
			</button>
		);
	}
}

export default CalculatorSymbolKey;
