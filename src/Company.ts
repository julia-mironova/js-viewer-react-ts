import faker from "faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
	companyName: string;
	companyPhrase: string;
	location: {
		lat: number;
		lng: number;
	};
	color: string = "green";

	constructor() {
		this.companyName = faker.company.companyName();
		this.companyPhrase = faker.company.catchPhrase();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude()),
		};
	}

	markerContent(): string {
		return `
		<h2>Company name ${this.companyName};</h2>
		<h3>Company name ${this.companyPhrase}</h3>
		`;
	}
}
