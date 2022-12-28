import React, { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
import {
	PlusIcon,
	ShieldExclamationIcon,
	TrashIcon,
} from "@heroicons/react/24/solid";
import SolidService from "@/main/SolidService";
import SolidLogo from "@/main/SolidLogo";
import Note from "@/types/Note";

export default function SekundMainComponent() {
	// const { t } = useTranslation();
	const [isLoggedIntoPod, setIsLoggedIntoPod] = useState(false);

	const note = {
		title: "My note",
		content: "This is my note",
	} as Note;

	useEffect(() => {
		function checkIfLoggedIntoPod() {
			const isLoggedIn = SolidService.instance.isLoggedIn();
			setIsLoggedIntoPod(isLoggedIn);
		}
		checkIfLoggedIntoPod();
	}, []);

	async function uploadToPod() {
		await SolidService.instance.uploadToPod(note);
	}

	async function removeFromPod() {
		await SolidService.instance.removeFromPod(note);
	}

	async function login() {
		await SolidService.instance.login();
		setIsLoggedIntoPod(true);
	}

	return (
		<div
			className={`sd-w-full sd-text-sm sd-text-secondary sd-flex sd-justify-center sd-items-center sd-space-x-2 sd-h-full`}
		>
			<div className="sd-flex sd-flex-col sd-items-center sd-mb-8 sd-space-y-4">
				{isLoggedIntoPod ? (
					<>
						<button
							className="sd-flex sd-items-center sd-mr-0 sd-overflow-hidden"
							onClick={() => uploadToPod()}
						>
							<span className="sd-truncate">
								Upload to your Pod
							</span>
							<PlusIcon className="sd-w-4 sd-h-4 sd-ml-2" />
						</button>
						<button
							className="sd-flex sd-items-center sd-mr-0 sd-overflow-hidden"
							onClick={() => removeFromPod()}
						>
							<span className="sd-truncate">
								Remove from your Pod
							</span>
							<TrashIcon className="sd-w-4 sd-h-4 sd-ml-2" />
						</button>
					</>
				) : (
					<button
						className="mr-0 sd-flex sd-items-center sd-overflow-hidden"
						onClick={login}
					>
						<span className="sd-truncate">Login to your Pod</span>
						<SolidLogo className="sd-w-4 sd-h-4 sd-ml-2" />
					</button>
				)}
				<div
					className="sd-text-sm sd-text-center sd-text-obs-muted"
					style={{ maxWidth: "250px" }}
				>
					<ShieldExclamationIcon className="sd-w-4 sd-h-4" />{" "}
					Experimental: Upload your note to your Solid Pod. Note that,
					for now, there is no indication as to whether your note is
					already exported or not.
				</div>
			</div>
		</div>
	);
}
