import Form from "../../ui/form";
import Input from "../../ui/input";
import Button from "../../ui/button";

function LoginForm() {
	return (
		<Form>
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
			<Button type="submit">Sign in</Button>
		</Form>
	);
}

export default LoginForm;
