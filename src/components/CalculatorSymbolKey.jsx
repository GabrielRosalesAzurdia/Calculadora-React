import { useContext } from "react";
import { OperationContext } from "../context/OperationContext";

function CalculatorSymbolKey({ valorTecla }) {
	const { actualizarDisplay } = useContext(OperationContext);

	return (
		<button
			className="px-6 py-2 font-semibold text-white border-b-4 rounded bg-cyan-500 border-cyan-800 hover:border-cyan-800 hover:bg-cyan-700"
			onClick={() => actualizarDisplay(valorTecla)}
		>
			{valorTecla.symbol}
		</button>
	);
}

export default CalculatorSymbolKey;
