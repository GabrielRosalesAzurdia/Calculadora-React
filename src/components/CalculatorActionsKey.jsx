import { useContext } from "react";
import { OperationContext } from "../context/OperationContext";

function CalculatorActionsKey({ valorTecla }) {
	const { actualizarDisplay } = useContext(OperationContext);
	return (
		<button
			className="px-6 py-2 font-semibold text-white border-b-4 rounded bg-blue-500 border-blue-800 hover:border-blue-800 hover:bg-blue-700"
			onClick={() => actualizarDisplay(valorTecla)}
		>
			{valorTecla}
		</button>
	);
}

export default CalculatorActionsKey;
