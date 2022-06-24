import DropdownButton from "./DropdownButton";
import { customElement } from "lit/decorators.js";
import OBS from "obs";

@customElement("midi-plate")
export default class SceneSelector extends DropdownButton {
	async getScenes() {
		const scenes = [{ name: "None", value: "None" }];

		const obsScenes = await OBS.getScenes();

		if (obsScenes) {
			for (let scene of obsScenes) {
				scenes.push({ name: scene, value: scene });
			}
		}

		return scenes;
	}

	async onOpenDropdown(): Promise<void> {
		this.options = await this.getScenes();
	}
}
