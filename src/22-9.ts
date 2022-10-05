class Personq {
    firstname:string='sunil';
    lastname:string='chougale';
}
let aa = new Personq()
console.log(aa)

class PersonA {
    constructor(public firstname:string,public lastname:string){                /////this is short hand method of class

    }
    display(){
        console.log(this.firstname + this.lastname)
    }
}
let bb = new PersonA('pratik','shinde')
bb.display()

class student{
    public fname:string;  
    protected lname:string;
    readonly school:string;
    private money:number;

    constructor(fn:string , ln:string, sn:string, mn:number){
        this.fname = fn;
        this.lname = ln
        this.school = sn
        this.money = mn
    }

}

class Teacher extends student{
    public profession:string;
    constructor(fn:string , ln:string, sn:string, mn:number, pr:string){
        super(fn , ln, sn, mn)
        this.profession = pr
    }
}

let Shashi = new Teacher('shashi','rewadkar','jspm',40000,'design')
console.log(Shashi.fname)

class company {
    constructor(public fname:string,protected lname:string,readonly school:string,private money:number){

    }
}
let object = new company('object','edge','mahape',55000)
console.log(object.fname)
object.fname='hitech'
console.log(object.fname)
// console.log(object.lname)
// object.lname='hitech'
// console.log(object.money)
// object.money='hitech'
console.log(object.school)
// object.school='hitech'

