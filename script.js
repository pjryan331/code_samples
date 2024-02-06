import {Person} from '/person';
import factory from '/employee';
import {Company} from '/company';
import {Automobile} from '/automobile';

let newPerson = new Person('Scott')
let newEmployee = new factory('Tim', 'Developer');
let newTruck = new Automobile('Truck', 'F');

let filter = function*(items, predicate){
  for(let item of items) {
    console.log('filter', item);
    if(predicate(item)){
      yield item;
    }
  }
}

let take = function*(items, number){
  let count = 0;
  if(number < 1) return;
  for(let item of items){
    console.log('take', item);
    yield item;
    count += 1;
    if(count >= number){
      return;
    }
  }
}

let count = 0;
let company = new Company();
company.addEmployees("Tim", "Tom", "Sue", "Jim")

for(let employee of take(filter(company, e => e[0] === "T"), 4)){
  count += 1;
}

let generator = function*(start, end){
  for(let i = start; i <= end; i++){
    yield i;
  }
}

let sum = 0;
for(let n of generator(1,5)){
  sum += n
}
console.log('Auto', newTruck.getType());
console.log('Engine Size', newTruck.getEngineSize());
console.log('Make', newTruck.getMake('C'));
console.log('sum', sum);
console.log('newPerson', newPerson.name)
console.log('newEmployee', newEmployee);
console.log("e1", newEmployee.doWork());
console.log("p1", newPerson.doWork());
console.log("e1", newEmployee._title)
document.write(newPerson.doWork() + '<br />')
document.write(newEmployee.doWork() + '<br />')
document.write('Employee count of employees starting with the letter "T" with a take count of 4 = ', count);

let previousPromise = new Promise((resolve, reject) => {
  resolve(4);
});

let promise = new Promise((resolve, reject) => {
  resolve(previousPromise);
});

promise.then((data) => {
  console.log('previousPromise', data);
}).catch((error) => {
  console.log(`There was an error which was "${error}".`)
});

