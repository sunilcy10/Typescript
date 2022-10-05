"use strict";
class Personq {
    constructor() {
        this.firstname = 'sunil';
        this.lastname = 'chougale';
    }
}
let aa = new Personq();
console.log(aa);
class PersonA {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    display() {
        console.log(this.firstname + this.lastname);
    }
}
let bb = new PersonA('pratik', 'shinde');
bb.display();
class student {
    constructor(fn, ln, sn, mn) {
        this.fname = fn;
        this.lname = ln;
        this.school = sn;
        this.money = mn;
    }
}
class Teacher extends student {
    constructor(fn, ln, sn, mn, pr) {
        super(fn, ln, sn, mn);
        this.profession = pr;
    }
}
let Shashi = new Teacher('shashi', 'rewadkar', 'jspm', 40000, 'design');
console.log(Shashi.fname);
class company {
    constructor(fname, lname, school, money) {
        this.fname = fname;
        this.lname = lname;
        this.school = school;
        this.money = money;
    }
}
let object = new company('object', 'edge', 'mahape', 55000);
console.log(object.fname);
object.fname = 'hitech';
console.log(object.fname);
// console.log(object.lname)
// object.lname='hitech'
// console.log(object.money)
// object.money='hitech'
console.log(object.school);
// object.school='hitech'
