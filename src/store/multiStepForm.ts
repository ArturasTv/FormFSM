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

const useMultiStepFormStore = create<MultiStepFormStore>()((set, get) => ({
	state: "first",
	next: () => {
		const currentState = get().state;

		const current = transitions.find(
			({ from, trigger }) => from === currentState && trigger === "next",
		);
		if (current) {
			set({ state: current.to });
		}
	},
	previous: () => {
		const currentState = get().state;

		const current = transitions.find(
			({ from, trigger }) => from === currentState && trigger === "previous",
		);
		if (current) {
			set({ state: current.to });
		}
	},
}));

export default useMultiStepFormStore;
