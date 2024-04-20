import { cn } from "../../utils/classes";

type Props = {
	options: { state: ProgressCircleState; label: string }[];
};

function ProgressBar({ options }: Props) {
	return (
		<div className="flex flex-row items-center space-x-8">
			{options.map((option) => (
				<ProgressCircle key={option.label} {...option} />
			))}
		</div>
	);
}

export type ProgressCircleState = "finished" | "active" | "pending";

type ProgressCircleProps = {
	label: string;
	state: ProgressCircleState;
};

function ProgressCircle({ label, state }: ProgressCircleProps) {
	const circleClassNames = [
		"size-10 rounded-full border-2",
		{
			"border-none bg-green-500": state === "finished",
			"border-green-500": state === "active",
			"border-blue-500": state === "pending",
		},
	];

	const labelClassNames = [
		"text-sm",
		{
			"text-green-500": state === "finished" || state === "active",
			"text-blue-500": state === "pending",
		},
	];

	return (
		<div className="flex flex-col items-center space-y-2">
			<div className={cn(circleClassNames)} />
			<span className={cn(labelClassNames)}>{label}</span>
		</div>
	);
}

export default ProgressBar;
