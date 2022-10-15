import React from "react";
import ReactDOM from "react-dom/client";
import { OperationContextProvider } from "./context/OperationContext";
import App from "./App";
import "./index.css";
import "./assets/fonts/NovaRound-Regular.ttf";

// La tarea del main es dar el contexto a todos los componentes hijos
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<OperationContextProvider>
			<App />
		</OperationContextProvider>
	</React.StrictMode>
);
