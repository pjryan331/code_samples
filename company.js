export class Company {
  constructor(){
    this.employees = [];
  }
  addEmployees(...names) {
		this.employees = this.employees.concat(names);
	}
	*[Symbol.iterator]() {
    for(let e of this.employees){
      console.log(e);
      yield e;
    }
		//return new newArrayIterator(this.employees)
	}
}



// class newArrayIterator {
// 	constructor(array){
// 		this.array = array;
// 		this.index = 0;
// 	}

// 	next() {
// 		var result = {value: undefined, done: true}
// 		if(this.index < this.array.length){
// 			result.value = this.array[this.index];
// 			result.done = false;
// 			this.index += 1;
// 		}
// 		return result;
// 	}
// }