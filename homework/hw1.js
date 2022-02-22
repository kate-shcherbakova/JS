let a = 'q';
if(typeof(a) == "string") {
    console.log("Hello " + a);
} else {
    console.log("Ошибка, не тот тип данных");
}

console.log(typeof 10); // number
console.log(typeof NaN); // number
console.log(typeof 'q'); // string
console.log(typeof true); // boolean
console.log(typeof {name: 'Kate'}); // number
console.log(typeof null); // object
console.log(typeof undefined); // undefined