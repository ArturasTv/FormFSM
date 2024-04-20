import type { InputHTMLAttributes, LabelHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
	label: string;
	labelProps: LabelHTMLAttributes<HTMLLabelElement>;
};

function Input({ label, labelProps, ...props }: Props) {
	return (
		<div className="space-y-2">
			<label
				{...labelProps}
				className="block text-sm font-medium leading-6 text-gray-900"
			>
				{label}
			</label>
			<input
				{...props}
				className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
			/>
		</div>
	);
}

export default Input;
