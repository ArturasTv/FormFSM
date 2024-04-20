import type { ReactNode } from "react";
import { cn } from "../../utils/classes";

type Props = {
	children: ReactNode;
	className?: string;
};

function Form({ children, className }: Props) {
	return (
		<div
			className={cn(
				"flex min-h-full flex-col lg:px-8 w-full md:w-[400px] h-[400px]",
				className,
			)}
		>
			<form className="space-y-6 w-full" action="#" method="POST">
				{children}
			</form>
		</div>
	);
}

export default Form;
