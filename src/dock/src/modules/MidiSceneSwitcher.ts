import { css, html, LitElement } from "lit";
import Config from "config/Config.js";
import OBS from "obs";
import { Midi } from "midi";
import { customElement } from "lit/decorators.js";

const binds = Config.get("midi-binds") || [{ midi: 157, itemId: 0 }];

function createBind() {
	binds.push({ midi: 157, itemId: 0 });
	saveBinds();
}

function saveBinds() {
	Config.set("midi-binds", binds);
}

function deleteBind(bind) {
	binds.splice(binds.indexOf(bind), 1);
	saveBinds();
}

@customElement("obs-midi-switcher")
export default class MidiSceneSwitcher extends LitElement {
	static get styles() {
		return css`
			.section {
				margin: 0 0 10px 0;
			}
			p {
				opacity: 0.75;
				margin-top: 0;
				font-size: 12px;
			}

			.list {
				margin-bottom: 20px;
				min-height: 200px;
				border-radius: 4px;
				padding: 1px;
				width: 100%;
			}
			.binding {
				display: grid;
				grid-template-columns: 1fr 1fr auto;
				grid-auto-rows: 32px;
				grid-gap: 4px;
				align-items: center;
				height: auto;
				position: relative;
				border-radius: 4px;
				margin-bottom: 8px;
			}
			.binding:hover {
				background: rgba(255, 255, 255, 0.025);
			}
			.binding:not(:last-child) {
				border-bottom: 1px solid #1a1a1a;
			}
			.binding.header:hover {
				background: transparent;
			}
			.binding.header {
				font-size: 13px;
				opacity: 0.5;
				height: auto;
				margin-bottom: 8px;
			}
			dropdown-button {
				min-width: 100%;
				width: 100%;
				box-sizing: border-box;
			}
			.midi-button {
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
			}

			i.material-icons {
				font-size: 16px;
			}
			.del-button {
				cursor: pointer;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 35px;
				border-radius: 4px;
			}
			.del-button:hover {
				background: #363636;
				box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.2);
			}
			.del-button:active {
				background: #272727;
				box-shadow: none;
			}
			.create-btn {
				margin-top: 10px;
			}
		`;
	}

	connectedCallback(): void {
		super.connectedCallback();

		Midi.onRedy(() => this.initMidi());

		OBS.getScenes().then((scenes) => {
			this.scenes = scenes.map((name) => {
				return { name, value: name };
			});
		});
	}

	scenes = [];
	midiDevices = [];

	async initMidi() {
		const midiDevices = Midi.getDevices().map(([_, dev]) => {
			return { name: dev.name, value: dev.name };
		});

		this.midiDevices = midiDevices;

		this.requestUpdate();
	}

	createBind() {
		createBind();
		this.requestUpdate();
	}

	handleMidiDeviceChange(dev) {
		Midi.open(dev.name);

		Midi.onMessage((msg) => {
			console.log(msg);
		});
	}

	render() {
		const scenes = this.scenes;
		const midiDevices = this.midiDevices;

		return html`
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
			/>

			<div class="row">
				<div>
					<dropdown-button
						class="Action"
						.options="${midiDevices}"
						.value="${Config.get("midi-device")}"
						@change="${(e) => {
							this.handleMidiDeviceChange(e.target.value);
							Config.set("midi-device", e.target.value.value);
						}}"
					></dropdown-button>
				</div>
			</div>

			<div class="list">
				<div class="binding header">
					<div>Midi</div>
					<div>Scene</div>
					<div>Item</div>
				</div>

				${binds.map((bind) => {
					return html`
						<div class="binding">
							<div class="midi-button">${bind.midi}</div>

							<dropdown-button
								class="Action"
								.options="${scenes}"
								.value="${bind.itemId}"
								@change="${(e) => {
									bind.itemId = e.target.value;
									saveBinds();
								}}"
							></dropdown-button>

							<div class="del-button">
								<span
									style="opacity: 0.5;"
									class="material-symbols-outlined"
									@click="${(e) => {
										deleteBind(bind);
										this.requestUpdate();
									}}"
									>delete</span
								>
							</div>
						</div>
					`;
				})}

				<button class="create-btn" @click="${() => this.createBind()}">
					Create Bind
				</button>
			</div>
		`;
	}
}
