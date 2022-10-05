let a:number|string ='sunil'
let b:number|string ='100'
console.log(a)
console.log(b);

///union type   ------->  storing multiple datatypes
type result = string|number

let c:result ='shashi'
let d:result = '2853'

console.log(c,d)

///literals 

type firstName = 'sunil'|'pratik'
type lastName =  'chougale'|'shinde'

let info11 : {
    firstName:firstName;
    lastName:lastName;
} = {
    firstName : 'sunil',
    lastName:'chougale'
}
console.log(info11)

///enum  it used to store no of properties/role of single entity
enum Role {
    'readOnly'=1,                             /////if 1 is not given then it not show in console
    'write',
    'admin',
    'customer'
    }
 if(Role.readOnly){
    console.log('read only')
 }
//  if(Role.war){
//     console.log('read only')                            ////it not work
//  }                       
if(Role.write){
    console.log('read and write ')
}
if(Role.admin){
    console.log('admin')
}
if(Role.customer){ // role == "customer"

}

enum Account{
    'saving'=1,
    'current',
    'service'
}
if(Account.saving){
console.log('saving account')
}
// if(Account.current){
    
// }