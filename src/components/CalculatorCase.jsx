import { useContext } from "react";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorNumberKey from "./CalculatorNumberKeys";
import CalculatorSymbolKey from "./CalculatorSymbolKey";
import { OperationContext } from "../context/OperationContext";
// La tarea del case es encapsular la calculadora y
// mostrar los botones con un map
function CalculatorCase() {
	const { numerosAUsar, simbolosAUsar } = useContext(OperationContext);
	return (
		<section
			className="mb-96 mr-96 ml-96 pt-40"
			style={{ fontFamily: "NovaRound-Regular" }}
		>
			<CalculatorDisplay />
			<div className="mt-10 bg-slate-800 p-2 rounded-md">
				<div className="grid grid-cols-3 gap-2 m-3 text-xl">
					{numerosAUsar.map((numeroAUsar, index) => {
						return <CalculatorNumberKey key={index} valorTecla={numeroAUsar} />;
					})}
				</div>
				<div className="grid grid-cols-3 gap-2 m-3 text-xl">
					{simbolosAUsar.map((simboloAusar, index) => {
						return (
							<CalculatorSymbolKey key={index} valorTecla={simboloAusar} />
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default CalculatorCase;
