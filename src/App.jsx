import CalculatorCase from "./components/CalculatorCase";
import { Toaster } from "react-hot-toast";

// La tarea del app es mostrar el case de la calculadora
function App() {
	return (
		<main className="bg-slate-600 h-screen w-screen">
			<Toaster position="top-right" reverseOrder={false} />
			<CalculatorCase />
		</main>
	);
}

export default App;
