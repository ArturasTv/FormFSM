import LoginForm from "./components/containers/forms/login-form";
import ProgressBar, {} from "./components/ui/progress-bar";
import useProgress from "./hooks/use-progress";
import useMultiStepFormStore from "./store/multiStepForm";

function App() {
	const state = useMultiStepFormStore(({ state }) => state);
	const nextState = useMultiStepFormStore(({ next }) => next);
	const previousState = useMultiStepFormStore(({ previous }) => previous);

	const { progress, next, previous } = useProgress([
		"First",
		"Second",
		"Third",
	]);

	const handleNext = () => {
		next();
		nextState();
	};

	const handlePrevious = () => {
		previous();
		previousState();
	};

	return (
		<div className="h-screen w-screen flex justify-center items-center">
			<div className="flex flex-col space-y-6 items-center">
				<ProgressBar options={progress} />
				{state === "first" && (
					<LoginForm title="First Login form" handleSubmit={handleNext} />
				)}
				{state === "second" && (
					<LoginForm
						title="Second Login form"
						handleSubmit={handleNext}
						handleGoBack={handlePrevious}
					/>
				)}
				{state === "third" && (
					<LoginForm title="Third Login form" handleGoBack={handlePrevious} />
				)}
			</div>
		</div>
	);
}

export default App;
