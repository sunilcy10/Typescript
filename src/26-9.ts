///////
type  Admin = {
    name:string;
    privillage:string[]
}
type Employee ={
    name:string;
    date:Date
}

type rollemployee = Admin & Employee

let E1 : rollemployee = {
    name:'shashi',
    privillage:['hitech','cnh'],
    date: new Date()
}

/////////

type a1 = string | boolean
type a2 = string | number
let a3:a1 = 'sunil'///true
type a4 = a1 & a2
let a5:a4 = 's'          //10//true//[10,'s']

/////  type gaurd method    
///method overloading
function add(a:number,b:number):number
function add(a:string,b:string):string
function add(a:number,b:string):string
function add(a:string,b:number):string
function add(a:a2,b:a2){
    if(typeof a==='string' && typeof b==='string'){
        return a.toString() + b.toString()      
    }else if(typeof a==='number' && typeof b==='number'){
        return a + b
    }else if(typeof a==='number' && typeof b==='string'){
        return a + b
    }else if(typeof a==='string' && typeof b==='number'){
        return a + b
    }
}

let add1 = add('sunil','chougale')
console.log(add1)
let add2 = add(1,'s')
console.log(add2)
let add3 = add(1,2)
console.log(add3)
let add4 = add('a',5)
console.log(add4)


///////

type  Admin1 = {
    name:string;
    privillage:string[]
}
type Employee1 ={
    name:string;
    date:Date
}

type rollemployee1 = Admin1 | Employee1

function printinfo(emp:rollemployee1){
if('privillage' in emp){
    console.log(emp.privillage)
}else if('date' in emp){
    console.log(emp.date)
}
}

printinfo({name:'shashi',date:new Date()})
printinfo({name:'shahshi',privillage:['cnh','hitech']})