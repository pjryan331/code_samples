let s_name = Symbol();

export class Person {
	constructor(name){
		this[s_name] = name;
	}

	doWork() {
		return `${this[s_name]} is working for free.`;
	}

	sumNumbers() {
		let numbers = [1,2,3,4];
		let sum = 0;
		//let iterator = numbers.values();
		//let next = iterator.next();
	
		//while(!next.done){
		//	sum += next.value;
		//	next = iterator.next();
	//}
		for(let n of numbers){
			sum += n;
		}
		console.log('sum', sum);
	}
	get name() {
		return this[s_name];
	}

	set name(newValue) {
		return this[s_name] = newValue
	}
}