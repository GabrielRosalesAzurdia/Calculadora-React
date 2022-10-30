import { toast } from "react-hot-toast";

export function pezEasterEgg(fnEstadoInicial) {
	const toastIdPez = toast.loading("Reiniciando en 5s");
	setTimeout(() => {
		toast.dismiss(toastIdPez);
		fnEstadoInicial();
	}, 5000);
	return ["<><"];
}
