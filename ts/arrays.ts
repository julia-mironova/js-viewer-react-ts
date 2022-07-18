const arr: string[][] = [["cat"], ["dog"]];

type Drink = [string, boolean, number];
const pepsi: Drink = ["pepsi", true, 40]; //tuple

interface Vehicle {
	name: string;
	year: number;
	broken: boolean;
}

const oldOne: Vehicle = {
	name: "susanna",
	year: 10,
	broken: false,
};

const printOldOne = (vehicle: Vehicle): void => {
	console.log(`i print your bike ${vehicle.name}`);
};
printOldOne(oldOne);
