import { useContext } from "react";
import { OperationContext } from "../context/OperationContext";

// La tarea del display es mostrar las operaciones y resultados actuales
function CalculatorDisplay() {
	const { displayNumber, actualizarDisplay } = useContext(OperationContext);
	return <p>{displayNumber}</p>;
}

export default CalculatorDisplay;
