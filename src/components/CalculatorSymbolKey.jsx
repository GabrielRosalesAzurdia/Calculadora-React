import { useContext } from "react";
import { OperationContext } from "../context/OperationContext";

function CalculatorSymbolKey({ valorTecla }) {
	const { actualizarDisplay } = useContext(OperationContext);
	if (valorTecla == "=") {
		return (
			<button
			className="h-fit w-full  px-6 py-2 font-semibold text-white border-b-4 rounded bg-red-500 border-red-800 hover:border-red-800 hover:bg-red-700"
				onClick={() => actualizarDisplay(valorTecla)}
			>
				{valorTecla}
			</button>
		);
	}else{
		return (
			<button
				className="px-6 py-2 font-semibold text-white border-b-4 rounded bg-cyan-500 border-cyan-800 hover:border-cyan-800 hover:bg-cyan-700"
				onClick={() => actualizarDisplay(valorTecla)}
			>
				{valorTecla}
			</button>
		);
	}
}

export default CalculatorSymbolKey;
