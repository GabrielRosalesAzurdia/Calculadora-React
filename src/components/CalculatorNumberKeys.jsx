import { useContext } from "react";
import { OperationContext } from "../context/OperationContext";

// La tarea del CalculatorNumberKeys es mostrar los botones
// individuales de cada número y colocarlo en el display
function CalculatorNumberKeys({ valorTecla }) {
	const { actualizarDisplay } = useContext(OperationContext);
	return (
		<button onClick={() => actualizarDisplay(valorTecla)}>{valorTecla}</button>
	);
}

export default CalculatorNumberKeys;
