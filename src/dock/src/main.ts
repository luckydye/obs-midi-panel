import { State } from "@luckydye/app-state";

// components
import "./components";

// modules
import "./modules/MidiSceneSwitcher";

window.addEventListener("load", () => {
	// load last state
	const saveState = localStorage.getItem("app-state");
	if (saveState) {
		const state = JSON.parse(saveState);
		console.log(state);
	}
});
