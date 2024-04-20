import { create } from "zustand";

type MultiStepFormState = "first" | "second" | "third";

type Transition = {
	from: MultiStepFormState;
	to: MultiStepFormState;
	trigger: string;
};

type MultiStepFormStore = {
	state: MultiStepFormState;
	next: () => void;
	previous: () => void;
};

const transitions: Transition[] = [
	{ from: "first", to: "second", trigger: "next" },
	{ from: "second", to: "third", trigger: "next" },
	{ from: "third", to: "first", trigger: "next" },
	{ from: "second", to: "first", trigger: "previous" },
	{ from: "third", to: "second", trigger: "previous" },
	{ from: "first", to: "third", trigger: "previous" },
];

const useBearStore = create<MultiStepFormStore>()((set, get) => ({
	state: "first",
	next: () => {
		const currentState = get().state;

		const current = transitions.find(
			(transition) =>
				transition.from === currentState && transition.trigger === "next",
		);
		if (current) {
			set({ state: current.to });
		}
	},
	previous: () => {
		const currentState = get().state;

		const current = transitions.find(
			(transition) =>
				transition.from === currentState && transition.trigger === "previous",
		);
		if (current) {
			set({ state: current.to });
		}
	},
}));

export default useBearStore;
