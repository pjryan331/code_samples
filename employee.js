import {Person} from '/person'

export default class Employee extends Person {
	constructor(name, title){
		super(name);
		this._title = title;
	}
	
	doWork(){
		return `${this.name} is a ${this._title} and working for money.`;
	}

	get title() {
		return this._title;
	}

	set title(newValue){
		return this._title = newValue;
	}
}

