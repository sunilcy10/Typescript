"use strict";
//Decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* decorator use karaysathi tsconfig madhe
 "experimentalDecorators": true,    he uncomment karane*/
function Logger(constructor) {
    console.log('Login...');
    console.log(constructor);
}
let PersonK = class PersonK {
    constructor() {
        this.name = 'Max';
        console.log('Creating Person object');
    }
};
PersonK = __decorate([
    Logger
], PersonK);
let abc = new PersonK();
//Decorator Factories
function Logger1(aaa) {
    return function (constructor) {
        console.log('hello');
        console.log('bye');
        console.log(aaa);
    };
}
let Personll = class Personll {
    constructor() {
        this.name = 'max';
        console.log('creating Object');
    }
};
Personll = __decorate([
    Logger1('good morning')
], Personll);
let abc2 = new Personll();
