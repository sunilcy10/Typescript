"use strict";
class wordBank {
    country() {
        console.log('India');
    }
}
class SBI extends wordBank {
    loan(interest) {
        console.log(`Hello i am sbi loan interest ${interest}`);
    }
    save(interest) {
        console.log(`hello I am SBI save interest ${interest}`);
    }
}
class central extends wordBank {
    loan(interest) {
        console.log(`i am central loan interest ${interest}`);
    }
    save(interest) {
        console.log(`i am central save interest ${interest}`);
    }
}
// let axis = new wordBank()              ////it show error Bcoz of ABSTRACT object
let kdcc = new SBI();
// we cannot create object of abstract class
// if abstract class is having abstract methods , those who inherit abstract class need to 
// give definition for methods
// abstract class can have abstract and and non abstract method
