const add = (a: number, b: number): number => {
	return a + b;
};

function divide(a: number, b: number): number {
	return a / b;
}

const throwErrorRepute = (message: string): never => {
	throw new Error(message);
};

const throwErrorReputeIf = (message: string): string => {
	if (!message) {
		throw new Error(message);
	}
	return message;
};

let weatherToday = {
	day: new Date(),
	weather: "sunny",
};

const logWeather = ({ day, weather }: { day: Date; weather: string }): void => {
	console.log(day);
	console.log(weather);
};
