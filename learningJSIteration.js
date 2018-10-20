//from: https://medium.com/@kevwe/understanding-javascript-array-iteration-methods-91190ce7de02 

//.entries()

let names = ["luca", "gloria", "giancarlo"];
let keynames = names.entries();

console.log(keynames.next().value);
console.log(keynames.next().value);
console.log(keynames.next().value);
console.log(keynames.next().done)

//.every()

function greaterthan (num) {
    return num >= 2
}

let twotimes = [2, 4, 6, 8];
console.log(twotimes.every(greaterthan))

let times = [2, 4, 6, 8, 1];
console.log(times.every(greaterthan))

//.foreach() - applies function to elements of an array in places

var array1 = ["two","six","eight","one"];
array1.forEach(add => console.log(`${add} sided`));

//.map() - creates new array with the results of a callback function applied to each element of the array

let animals = ["dog", "cat", "tiger", "goat", "lion"];
const result = animals.map(animal => console.log(`Pet ${animal}`));

//.reduce()
var lines = [0,1,2,3,4,5]; 
let added = lines.reduce((first,cur) => first + cur);
console.log(added);
let biasaddedd = lines.reduce(((first,cur) => first+cur),10); //adding an initial value
console.log(biasaddedd)


// .filter()
const filteredresult = animals.filter(animal => animal.length > 3);
console.log(filteredresult);

const complexresult = animals.filter(animal => animal.length > 3).map(animal => console.log(`Pet ${animal}`));

// .find()
let numbers = [4,5,6324,6145,516,15344];
let findFirst = numbers.find(num => num > 0);
console.log(findFirst)

// .keys()
for (let key of array1.keys()){
    console.log(key);
}

// reduceRight()
let pairs = [[1,4],[2,5],[8,10]];
let allpair = pairs.reduceRight((first,cur) => first.concat(cur));
console.log(allpair)

// .some() - at least one of the array passes the callback function as a condition
var grades = [75,64,92.47];
let grading = grades.some(grade => grade > 55);
console.log(grading)


