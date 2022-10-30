import { useContext } from "react";
import { OperationContext } from "../context/OperationContext";

function CalculatorActionsKey({ valorTecla }) {
	const { actualizarDisplay } = useContext(OperationContext);
	return (
		<button
			className="px-6 py-2 font-semibold text-white rounded btn bg-blue-500"
			onClick={() => actualizarDisplay(valorTecla)}
		>
			{valorTecla}
		</button>
	);
}

export default CalculatorActionsKey;
