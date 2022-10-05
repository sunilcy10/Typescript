"use strict";
let user = {
    name: 'sunil',
    age: 26,
    greet: (word) => {
        console.log(word);
    }
};
user.greet('goodmorning');
let user1 = {
    name: 'pratik',
    age: 26,
    greet: (word) => {
        console.log(word);
    }
};
user1.greet('good afternoon');
class personJ {
    constructor(name) {
        this.age = 30; /////it show error
        this.name = name;
    }
    greet(word) {
        console.log(`${word}+${this.name}`);
    }
    display() {
        console.log('hello');
    }
}
let nikhil = new personJ('nikhil');
nikhil.display();
nikhil.greet('satara');
// console.log(nikhil.age)
