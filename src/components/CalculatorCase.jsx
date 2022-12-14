import { useContext } from "react";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorNumberKey from "./CalculatorNumberKeys";
import CalculatorSymbolKey from "./CalculatorSymbolKey";
import CalculatorActionsKey from "./CalculatorActionsKey";
import { OperationContext } from "../context/OperationContext";
// La tarea del case es encapsular la calculadora y
// mostrar los botones con un map
function CalculatorCase() {
	const { numerosAUsar, simbolosAUsar, acciones } =
		useContext(OperationContext);
	return (
		<section
			className="artboard artboard-horizontal phone-1 md:mb-96 md:mr-96 md:ml-96 md:pt-20"
			style={{ fontFamily: "NovaRound-Regular" }}
		>
			<p className="text-white mb-2">GR - 2022</p>
			<CalculatorDisplay />
			<div className="mt-10 bg-slate-800 p-2 rounded-md">
				<div className="grid grid-cols-2 gap-2 m-3 text-xl">
					{acciones.map((accion, index) => {
						return <CalculatorActionsKey key={index} valorTecla={accion} />;
					})}
				</div>
				<div className="grid grid-cols-3 gap-2 m-3 text-xl">
					{numerosAUsar.map((numeroAUsar, index) => {
						return numeroAUsar != 0 ? (
							<CalculatorNumberKey key={index} valorTecla={numeroAUsar} />
						) : (
							<span key={index} />
						);
					})}
				</div>
				<div className="text-center text-xl m-3">
					{numerosAUsar.map((numeroAUsar, index) => {
						return numeroAUsar != 0 ? (
							<span key={index} />
						) : (
							<CalculatorNumberKey key={index} valorTecla={numeroAUsar} />
						);
					})}
				</div>
				<div className="grid grid-cols-3 gap-2 m-3 text-xl">
					{simbolosAUsar.map((simboloAUsar, index) => {
						return simboloAUsar != "=" ? (
							<CalculatorSymbolKey key={index} valorTecla={simboloAUsar} />
						) : (
							<span key={index} />
						);
					})}
				</div>
				<div className="text-center text-xl m-3">
					{simbolosAUsar.map((simboloAUsar, index) => {
						return simboloAUsar != "=" ? (
							<span key={index} />
						) : (
							<CalculatorSymbolKey key={index} valorTecla={simboloAUsar} />
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default CalculatorCase;
