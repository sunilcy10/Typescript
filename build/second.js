"use strict";
let a = 'sunil';
let b = '100';
console.log(a);
console.log(b);
let c = 'shashi';
let d = '2853';
console.log(c, d);
let info11 = {
    firstName: 'sunil',
    lastName: 'chougale'
};
console.log(info11);
///enum  it used to store no of properties/role of single entity
var Role;
(function (Role) {
    Role[Role["readOnly"] = 1] = "readOnly";
    Role[Role["write"] = 2] = "write";
    Role[Role["admin"] = 3] = "admin";
    Role[Role["customer"] = 4] = "customer";
})(Role || (Role = {}));
if (Role.readOnly) {
    console.log('read only');
}
//  if(Role.war){
//     console.log('read only')                            ////it not work
//  }                       
if (Role.write) {
    console.log('read and write ');
}
if (Role.admin) {
    console.log('admin');
}
if (Role.customer) { // role == "customer"
}
var Account;
(function (Account) {
    Account[Account["saving"] = 1] = "saving";
    Account[Account["current"] = 2] = "current";
    Account[Account["service"] = 3] = "service";
})(Account || (Account = {}));
if (Account.saving) {
    console.log('saving account');
}
// if(Account.current){
// }
