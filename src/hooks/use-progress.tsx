import { useState } from "react";
import type { ProgressCircleState } from "../components/ui/progress-bar";

type Progress = {
	label: string;
	state: ProgressCircleState;
};

function useProgress(initialProgress: string[]) {
	const [progress, setProgress] = useState<Progress[]>(
		initialProgress.map((progress, index) => ({
			label: progress,
			state: index === 0 ? "active" : "pending",
		})),
	);

	function next() {
		setProgress((prev) =>
			prev.map((step, index) => {
				if (step.state === "active") {
					return { ...step, state: "finished" };
				}
				if (
					step.state === "pending" &&
					index === progress.findIndex((step) => step.state === "active") + 1
				) {
					return { ...step, state: "active" };
				}
				return step;
			}),
		);
	}

	function previous() {
		setProgress((prev) =>
			prev.map((step, index) => {
				if (step.state === "active") {
					return { ...step, state: "pending" };
				}
				if (
					step.state === "finished" &&
					index === progress.findIndex((step) => step.state === "active") - 1
				) {
					return { ...step, state: "active" };
				}
				return step;
			}),
		);
	}

	return { progress, next, previous };
}

export default useProgress;
