import SolidPlugin from "@/main";
import SolidMainComponent from "@/main/SolidMainComponent";
import { ItemView, WorkspaceLeaf } from "obsidian";
import React from "react";
import ReactDOM from "react-dom/client";

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
		const root = ReactDOM.createRoot(container);
		root.render(<SolidMainComponent />);
		// this.plugin.updateOnlineStatus();
	}

	async onClose() {
		// Nothing to clean up.
	}
}
