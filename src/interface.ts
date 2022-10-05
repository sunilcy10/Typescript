interface personC{
    name:string;
    age:number;
    greet(word:string):void
}

type personG = {
    name:string;
    age:number;
    greet(word:string):void
}
let user:personC ={
    name:'sunil',
    age:26,
 greet:(word:string)=>{
    console.log(word)
 }
}
user.greet('goodmorning')

let user1:personG = {
    name:'pratik',
    age :26,
    greet:(word:string)=>{
        console.log(word)
    }
}
user1.greet('good afternoon')

interface greeting{
    name:string;
    greet(word:string):void
}

class personJ implements greeting{
    name:string;
    age=30;                                      /////it show error
    constructor(name:string){
          this.name=name
    }
    greet(word:string):void{
        console.log(`${word}+${this.name}`)
    }
    display(){
        console.log('hello')
    }
}

let nikhil = new personJ('nikhil')
nikhil.display()
nikhil.greet('satara')
// console.log(nikhil.age)