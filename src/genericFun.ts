let names:Array<string>=['sunil','pratik','shashi','nikhil']

let bbb = names[0].toUpperCase()
console.log(bbb)

let pro = new Promise<string>(function(resolve,reject){
    setTimeout(function(){
        resolve('hello')
    },2000);
})
pro.then(function(e){
    console.log(e.includes('h'))
})


function merge<T extends Object, U extends Object>(objOne:T,objTwo:U){
                return Object.assign(objOne,objTwo)
    }
    // function merge<T extends Object,U extends Object>(objOne:T,objTwo:U){
    //     return Object.assign(objOne,objTwo)
    // }
    let a11 = merge({name:'sunil'},{age:26})
    let a12= a11.name
    let a13 = a11.age
    
    
    interface Lengthy {
        length:number
    }
    function countAndDescribe<T extends Lengthy>(element:T){
          console.log(element.length)
    }

countAndDescribe('sunil')


interface B {
    size:number
}

function countAndDescribe11<T extends B>(ele :T){
    console.log(ele.size)

}

// countAndDescribe11(11)
// countAndDescribe11([1,2,3,4])
// countAndDescribe11({name:'sunil',lname:'chougale'})
countAndDescribe11(new Set([11,22,33,44,55]))
// countAndDescribe11(new Map([11,22],[55,'admin']]))

type sa= any[]|string
function countDescribe(str:sa){
    console.log(str.length)
}

countDescribe('hello')
// countDescribe(10)
countDescribe([1,2,3,4,'2'])

class DataStoerage<T extends string|number|Boolean>{
    private data:T[]=[]
    addIteam(iteam:T){
        this.data.push(iteam)
    }
    getArray(){
      console.log(this.data)  
    }
    removeIeam(ele:T){
        this.data.splice(this.data.indexOf(ele),1)
    }

}
let add123 = new DataStoerage()

add123.addIteam(1000)
add123.addIteam(2000)
add123.addIteam(3000)
add123.addIteam(4000)
add123.getArray()
add123.removeIeam(1000)
add123.getArray()