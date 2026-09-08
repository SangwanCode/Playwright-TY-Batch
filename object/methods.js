// Object : create, add, update, delete
// Object : iteration key properties
// Object : copy clone ,merge

//Object : represent real world entites
// act login logout,
// actions js function

// let user={name:'john',
//     age:30
// }

// user.sayHi= function(){
//     console.log("hi")
// }

// console.log(user)
// user.sayHi();
// function that is a property of the object is called method.

// function sayHi(){
//     console.log("HI")
// }

// let user={
//     name:"john",    
// }

// user.sayHi=sayHi;
// // console.log(user)
// user.sayHi();

// let user={
//     name:'john',
//     sayHI: function(){
//         console.log('hi')
//     }
// }
// user.sayHI();
// console.log(user)

//shorthand

// let user={
//     name:'john',
//      sayHi(){ // same as sayHI: function()
//         console.log("hi")
//     }
// }
// user.sayHi();

// this --keyword
// the value of "this" is the object  use before dot
//  or the one which used to call the method. 
// user.sayHi(); // this --->user

// let user={
//     name:'john',
//     sayHi(){
//         console.log(`hi :${this.name} `)
//     }
// }
//  user.sayHi()

//techinally
// let user={
//     name:'john',
//     sayHi(){
//         console.log(`hi :${user.name} `)
//     }
// }
// user.sayHi()


function sayHI(){
     console.log(`hi :${this.name} `)
}

let user={name:'john'}
let admin={name:'admin'}

user.f=sayHI;
admin.f=sayHI;
// console.log(user)
user.f();
admin.f();
admin["f"]();
