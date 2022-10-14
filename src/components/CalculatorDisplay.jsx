import { useContext } from "react";
import { OperationContext } from "../context/OperationContext";

// La tarea del display es mostrar las operaciones y resultados actuales
function CalculatorDisplay() {
	const { displayList } = useContext(OperationContext);
	return <p>{displayList}</p>;
}

export default CalculatorDisplay;
