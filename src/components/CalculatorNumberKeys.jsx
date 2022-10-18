import { useContext } from "react";
import { OperationContext } from "../context/OperationContext";

// La tarea del CalculatorNumberKeys es mostrar los botones
// individuales de cada número y colocarlo en el display
function CalculatorNumberKeys({ valorTecla }) {
	const { actualizarDisplay } = useContext(OperationContext);
	if (valorTecla == 0) {
		return (
			<button
				className="h-fit w-full  px-6 py-2 font-semibold text-white border-b-4 rounded bg-red-500 border-red-800 hover:border-red-800 hover:bg-red-700"
				onClick={() => actualizarDisplay(valorTecla)}
			>
				{valorTecla}
			</button>
		);
	} else {
		return (
			<button
				className="px-6 py-2 font-semibold text-white border-b-4 rounded bg-slate-500 border-slate-800 hover:border-slate-800 hover:bg-slate-700"
				onClick={() => actualizarDisplay(valorTecla)}
			>
				{valorTecla}
			</button>
		);
	}
}

export default CalculatorNumberKeys;
