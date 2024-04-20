import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

function Form({ children }: Props) {
	return (
		<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 w-full md:w-[400px]">
			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form className="space-y-6" action="#" method="POST">
					{children}
				</form>
			</div>
		</div>
	);
}

export default Form;
