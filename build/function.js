"use strict";
function addition(x, y) {
    console.log(x + y);
}
addition(10, 121);
function multiple(x, y) {
    console.log(x * y);
}
multiple(10, 11);
function addition2(x, y) {
    console.log(x + y);
    return x + y;
}
addition2(10, 10);
// addition2('10',10)
function addition3(x, y) {
    if (typeof x == 'number' && typeof y == 'number') {
        console.log(x + y);
    }
    else {
        console.log(Number(x) + Number(y));
    }
}
addition3('4', 15);
let info = {
    mother: 'rekha',
    father: 'maruti'
};
console.log(info);
function ad(x, y) {
    return x + y;
}
function displayResult(x, y, fn) {
    console.log(`result of sum ${fn(x, y)}`);
}
displayResult(10, 20, ad);
function displayResultA(x, y, fn) {
    console.log(`result of sum ${fn(x)}`); //////here not showing error if not given "y"
}
displayResultA(10, 20, ad);
function displayResultB(x, y, fn) {
    console.log(`result of sum ${fn(x, y)}`); //////here showing error if not given "y"
}
displayResultB(10, 50, ad);
