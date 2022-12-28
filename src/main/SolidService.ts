import SolidPlugin from "@/main";
import { Session } from "@inrupt/solid-client-authn-node";
import { getPodUrlAll, UrlString } from "@inrupt/solid-client";

import { App, Modal, Setting } from "obsidian";
import Note from "@/types/Note";

type PodCredentials = {
	clientId?: string;
	clientSecret?: string;
};

export default class SolidService {
	private static _instance: SolidService;
	private plugin: SolidPlugin;
	private session?: Session = undefined;

	constructor(plugin: SolidPlugin) {
		this.plugin = plugin;
		SolidService._instance = this;
	}

	static instantiate(plugin: SolidPlugin): SolidService {
		return new SolidService(plugin);
	}

	static get instance(): SolidService {
		return SolidService._instance;
	}

	async login() {
		this.session = new Session();
		async function podLoginHandler(
			session: Session,
			podCredentials: PodCredentials
		) {
			await session.login({
				// 2. Use the authenticated credentials to log in the session.
				clientId: podCredentials.clientId,
				clientSecret: podCredentials.clientSecret,
				oidcIssuer: "https://login.inrupt.com",
			});
			if (session.info.isLoggedIn) {
				// 3. Your session should now be logged in, and able to make authenticated requests.
				const response = await session.fetch(
					session.info.webId ||
						"https://solidcommunity.net/profile/card#me"
				);
				console.log(await response.text());
			}
		}
		new PodCredentialsModal(this.plugin.app, (result) => {
			if (this.session) {
				podLoginHandler(this.session, result);
			} else {
				console.error("Session not initialized");
			}
		}).open();
	}

	isLoggedIn(): boolean {
		return this.session?.info.isLoggedIn || false;
	}

	async logout() {
		// await this.session?.logout();
	}

	async createNoteDatasetURL(noteTitle: string): Promise<string> {
		if (!this.session) {
			throw new Error("Session not initialized");
		}
		const mypods: UrlString[] = await getPodUrlAll(
			this.session.info.webId || "",
			{
				fetch: fetch,
			}
		);
		if (mypods.length > 0) {
			const storageRoot = mypods[0] as string;
			const notesDatasetURL = `${storageRoot}notes/${noteTitle}`;
			console.log(notesDatasetURL);
			return notesDatasetURL;
		} else {
			throw new Error("No pod found");
		}
	}

	extractTags(note: Note): string[] {
		const tags = note.content.match(/#(\w+)/g);
		if (tags) {
			return tags.map((tag) => tag.replace("#", ""));
		}
		return [];
	}

	async uploadToPod(note: Note) {
		// let notesDataset = createSolidDataset();
		// const slug = slugify(note.title);
		// const noteThing = buildThing(createThing({ name: slug }))
		//   .addUrl("http://www.w3.org/1999/02/22-rdf-syntax-ns#/type", "http://schema.org/NoteDigitalDocument")
		//   .addStringNoLocale("http://schema.org/headline", note.title)
		//   .addDatetime("http://schema.org/dateCreated", new Date(note.created))
		//   .addStringNoLocale("http://schema.org/keywords", this.extractTags(note).join(","))
		//   .addStringNoLocale("http://schema.org/text", note.content)
		//   .build();
		// notesDataset = setThing(notesDataset, noteThing);
		// const notesDatasetURL = await this.createNoteDatasetURL(slug);
		// notesDataset = await saveSolidDatasetAt(
		//   notesDatasetURL,
		//   notesDataset,
		//   { fetch: fetch } // fetch from authenticated Session
		// );
		// console.log(notesDataset);
	}

	async removeFromPod(note: Note) {}
}

export class PodCredentialsModal extends Modal {
	clientId?: string;
	clientSecret?: string;
	onSubmit: (result: PodCredentials) => void;

	constructor(app: App, onSubmit: (result: PodCredentials) => void) {
		super(app);
		this.onSubmit = onSubmit;
	}

	onOpen() {
		const { contentEl } = this;

		contentEl.createEl("h2", { text: "Your Pod Credentials" });

		new Setting(contentEl).setName("Client ID").addText((text) => {
			text.onChange((value) => {
				this.clientId = value;
			});
		});

		new Setting(contentEl).setName("Client Secret").addText((text) => {
			text.onChange((value) => {
				this.clientSecret = value;
			});
		});

		new Setting(contentEl).addButton((btn) =>
			btn
				.setButtonText("Submit")
				.setCta()
				.onClick(() => {
					this.close();
					this.onSubmit({
						clientId: this.clientId,
						clientSecret: this.clientSecret,
					});
				})
		);
	}

	onClose() {
		const { contentEl } = this;
		contentEl.empty();
	}
}
