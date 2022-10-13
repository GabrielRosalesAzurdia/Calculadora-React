import { useContext } from "react";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorNumberKey from "./CalculatorNumberKeys";
import CalculatorSymbolKey from "./CalculatorSymbolKey";
import {OperationContext} from "../context/OperationContext";
// La tarea del case es encapsular la calculadora y
// mostrar los botones con un map
function CalculatorCase() {
	const { numerosAUsar, simbolosAUsar } = useContext(OperationContext);
	return (
		<section>
			<CalculatorDisplay />
			<hr />
			{numerosAUsar.map((numeroAUsar, index) => {
				return <CalculatorNumberKey key={index} valorTecla={numeroAUsar} />;
			})}
			<br />
			{simbolosAUsar.map((simboloAusar, index) => {
				return <CalculatorSymbolKey key={index} valorTecla={simboloAusar} />;
			})}
		</section>
	);
}

export default CalculatorCase;
