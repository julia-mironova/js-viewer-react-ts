const today = new Date();
//console.log(today.getMonth() + 1);
const appels: number = 5;

let colors: string[] = ["green", "red"];

class Car {}

let car: Car = new Car();

let point: { x: number; y: number } = {
	x: 10,
	y: 20,
};

//function
const logNumber: (i: number) => void = (i) => {
	console.log(i);
};

const json = '{"x":20, "y":10}';
const coord: { x: number; y: number } = JSON.parse(json);
console.log(coord);
