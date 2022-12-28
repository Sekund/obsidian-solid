import SolidPlugin from "@/main";
import SolidMainComponent from "@/main/SolidMainComponent";
import { ItemView, WorkspaceLeaf } from "obsidian";
import * as React from "react";
import * as ReactDOM from "react-dom";

export const SOLID_VIEW_TYPE = "solid-view";

export default class SolidView extends ItemView {
	plugin: SolidPlugin;
	constructor(leaf: WorkspaceLeaf, plugin: SolidPlugin) {
		super(leaf);
		this.plugin = plugin;
	}

	getIcon(): string {
		return "solid-icon";
	}

	getViewType() {
		return SOLID_VIEW_TYPE;
	}

	getDisplayText() {
		return "My Solid View";
	}

	async onOpen() {
		const container = this.containerEl.children[1];
		container.empty();
		ReactDOM.render(<SolidMainComponent />, this.containerEl.children[1]);
		// this.plugin.updateOnlineStatus();
	}

	async onClose() {
		// Nothing to clean up.
	}
}
