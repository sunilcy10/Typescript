"use strict";
class Person {
    constructor(fn) {
        this.lname = 'chougale';
        this.fname = fn;
    }
}
let sunil = new Person('sunil');
console.log(sunil);
// class Person111{
//     fname:string;
//     lname:string;
//     constructor(fn:string,ln:string){
//         this.fname = fn,
//         this.lname = ln
//     }
//     display(){
//         console.log(this.fname + this.lname)
//     }
// }
////inheritance
class Father {
    constructor(fn, ln) {
        this.fname = fn,
            this.lname = ln;
    }
    display() {
        console.log(this.fname + this.lname);
    }
}
class Son extends Father {
    constructor(fn, ln, sn) {
        super(fn, ln);
        this.sname = sn;
    }
    display() {
        console.log(this.sname + this.lname);
        super.display();
    }
}
let pratik = new Son('dattatray', 'shinde', 'pratik');
console.log(pratik);
pratik.display();
class employee {
    constructor(fn, cn, sl) {
        this.fname = fn,
            this.companyName = cn,
            this.salary = sl;
    }
}
let shashi = new employee('shashi', 'CNH', 35000);
console.log(shashi.fname);
console.log(shashi.companyName);
// console.log(shashi.salary)
