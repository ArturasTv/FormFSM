import Form from "../../ui/form";
import Input from "../../ui/input";
import Button from "../../ui/button";

type Props = {
	title?: string;
	handleSubmit?: () => void;
	handleGoBack?: () => void;
};

function LoginForm({ title, handleSubmit, handleGoBack }: Props) {
	return (
		<Form>
			<h1 className="text-2xl font-bold">{title}</h1>
			<Input
				id="email"
				name="email"
				type="email"
				label="Email address"
				labelProps={{
					htmlFor: "email",
				}}
			/>
			<Input
				id="password"
				name="password"
				type="password"
				label="Password"
				labelProps={{
					htmlFor: "password",
				}}
			/>
			{handleSubmit && (
				<Button onClick={() => handleSubmit()} type="button">
					Next
				</Button>
			)}
			{handleGoBack && (
				<Button onClick={() => handleGoBack()} type="button">
					Back
				</Button>
			)}
		</Form>
	);
}

export default LoginForm;
