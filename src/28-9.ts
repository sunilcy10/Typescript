type Admin2 = {
    name:string
    privellage:string[]

}
type Employee2 = {
    name:string
    date:Date
}

type calemployee = Admin2 | Employee2

function printinfo1(emp:calemployee){
    if('privellage' in emp){
       console.log(emp.privellage)
    }else if('date' in emp){
       console.log(emp.date)
    }
}

printinfo1({name:'sunil',date:new Date()})
printinfo1({name:'anil',privellage:['anil','chougale']})

///

class Car{
 drive(){
    console.log('Driving .... Car')
 }
}

class Truck{
    drive(){
        console.log('Driving .... Truck')
     }
     loadTruck(quentity:number){
        console.log(quentity)
     }
}

type vehicle = Car | Truck

let v1 = new Car()
let v2 = new Truck()

function useVehicle(veh:vehicle){
    veh.drive()
    if(veh instanceof Truck ){
      veh.loadTruck(10000)
    }
}

useVehicle(v1)
useVehicle(v2)

interface Bird{
    type:'bird'
    flyingSpeed:number
}

interface Tiger{
    type:'tiger'
    runningSpeed:number
}

type Animal = Bird | Tiger

function animalMovement(animal:Animal){
    let speed;
    switch (animal.type) {
        case 'bird':
                 speed = animal.flyingSpeed
            break;
        case 'tiger':
                speed = animal.runningSpeed
            
            break;
    
        default: console.log('Incorrect')
            break;
    }
    console.log(speed)
}

animalMovement({type:"bird",flyingSpeed:10})
animalMovement({type:"tiger",runningSpeed:20})