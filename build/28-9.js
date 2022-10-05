"use strict";
function printinfo1(emp) {
    if ('privellage' in emp) {
        console.log(emp.privellage);
    }
    else if ('date' in emp) {
        console.log(emp.date);
    }
}
printinfo1({ name: 'sunil', date: new Date() });
printinfo1({ name: 'anil', privellage: ['anil', 'chougale'] });
///
class Car {
    drive() {
        console.log('Driving .... Car');
    }
}
class Truck {
    drive() {
        console.log('Driving .... Truck');
    }
    loadTruck(quentity) {
        console.log(quentity);
    }
}
let v1 = new Car();
let v2 = new Truck();
function useVehicle(veh) {
    veh.drive();
    if (veh instanceof Truck) {
        veh.loadTruck(10000);
    }
}
useVehicle(v1);
useVehicle(v2);
function animalMovement(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'tiger':
            speed = animal.runningSpeed;
            break;
        default:
            console.log('Incorrect');
            break;
    }
    console.log(speed);
}
animalMovement({ type: "bird", flyingSpeed: 10 });
animalMovement({ type: "tiger", runningSpeed: 20 });
