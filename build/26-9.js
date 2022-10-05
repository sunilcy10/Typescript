"use strict";
let E1 = {
    name: 'shashi',
    privillage: ['hitech', 'cnh'],
    date: new Date()
};
let a3 = 'sunil'; ///true
let a5 = 's'; //10//true//[10,'s']
function add(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        return a.toString() + b.toString();
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'number' && typeof b === 'string') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'number') {
        return a + b;
    }
}
let add1 = add('sunil', 'chougale');
console.log(add1);
let add2 = add(1, 's');
console.log(add2);
let add3 = add(1, 2);
console.log(add3);
let add4 = add('a', 5);
console.log(add4);
function printinfo(emp) {
    if ('privillage' in emp) {
        console.log(emp.privillage);
    }
    else if ('date' in emp) {
        console.log(emp.date);
    }
}
printinfo({ name: 'shashi', date: new Date() });
printinfo({ name: 'shahshi', privillage: ['cnh', 'hitech'] });
