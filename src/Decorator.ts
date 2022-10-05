//Decorator


/* decorator use karaysathi tsconfig madhe 
 "experimentalDecorators": true,    he uncomment karane*/
function Logger(constructor:Function){
console.log('Login...')
console.log(constructor)
}

@Logger
 class PersonK {
    name='Max';
    constructor(){
        console.log('Creating Person object')
    }
 }

 let abc = new PersonK()

//Decorator Factories

function Logger1(aaa:string){
    return function(constructor:Function){
        console.log('hello')
        console.log('bye')
        console.log(aaa)
    }
    
}

@Logger1('good morning')

class Personll{
    name = 'max';
    constructor(){
        console.log('creating Object')
    }
}

let abc2= new Personll()


