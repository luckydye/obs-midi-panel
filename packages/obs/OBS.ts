interface OBSInterface {
	getControlLevel(callback: (level: number) => void): void;
	getScenes(callback: (scenes: string[]) => void): void;
	setCurrentScene(scene: string): void;
}

declare global {
	const obsstudio: OBSInterface;
}

if ("obsstudio" in window) {
	obsstudio.getControlLevel(function (level) {
		console.log("OBS control level:", level);
	});
}

export default class OBS {
	static async getScenes(): Promise<string[]> {
		return new Promise((resolve) => {
			obsstudio.getScenes(function (scenes) {
				resolve(scenes);
			});
		});
	}

	static async setScene(scene: string) {
		obsstudio.setCurrentScene(scene);
	}
}
