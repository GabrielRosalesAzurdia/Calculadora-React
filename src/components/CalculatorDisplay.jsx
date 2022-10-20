import { useContext } from "react";
import { OperationContext } from "../context/OperationContext";

// La tarea del display es mostrar las operaciones y resultados actuales
function CalculatorDisplay() {
	const { displayList } = useContext(OperationContext);
	return (
		<div className="bg-slate-800 pt-2 pb-2 pr-2 text-2xl text-right text-white rounded-md">
			{displayList}
		</div>
	);
}

export default CalculatorDisplay;
