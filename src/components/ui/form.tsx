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
				"flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 w-full md:w-[400px] md:min-h-[400px]",
				className,
			)}
		>
			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form className="space-y-6" action="#" method="POST">
					{children}
				</form>
			</div>
		</div>
	);
}

export default Form;
