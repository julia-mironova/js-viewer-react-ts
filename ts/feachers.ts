import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

axios.get(url).then((response) => {
	const todo = response.data as Todo;
	const id = todo.id;
	const title = todo.title;
	const completed = todo.completed;
	logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
	console.log(`it is ${id} with ${title} and ${completed}`);
};

const today: Date = new Date();
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

const throwError = (message: string): never => {
	throw new Error(message);
};
