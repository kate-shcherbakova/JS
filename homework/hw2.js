let array = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
let str = '';

function task(n) {
    console.log("----- task " + n + " -----\n");
}

task(1);

array.forEach(function (item, i) {
    if (i == (array.length - 1)) {
        str = str + item;
    } else {
        str = str + item + '|';
    }
})

console.log(str);

task(2);

str = 'Вася;Петя;Вова;Олег';

array = str.split(';');

console.log(array);

task(3);

function hello2(name = "гость") {
    console.log("Привет, " + name);
}

hello2("Катя");
hello2();

task(4);

const fruits = ['яблоко', 'ананас', 'груша'];

let newArray = fruits.map(function (item) {
    return item.toUpperCase();
})

console.log(newArray);

task(5);

function addOneForAll() {
    let array = [];
    for (let i = 0; i < arguments.length; i++) {
        array[i] = arguments[i] + 1;
    }
    return array;
}

let val = addOneForAll(1, 2, 3, 4);
console.log(val);

task(6);

function getSum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

val = getSum(1, 2, 3, 4);
console.log(val);

task(7);

const arr = [1, 'hello', 2, 3, 4, '5', '6', 7, null];

newArray = [];

arr.forEach(function (item) {
    if (typeof item == "number") {
        newArray.push(item);
    }
})

console.log(newArray);

task(8);

function arrayTesting(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == true) {
            return 'Нашли true значение';
        }
    }
    return 'Ничего нет';
}

const haveTrueValue = arrayTesting([0, false, null, 1]);

const dontHaveTrueValue = arrayTesting([0, false, null, 0]);

console.log(haveTrueValue);
console.log(dontHaveTrueValue);