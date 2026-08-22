// Object {}

// let func=()=>{ return  {
//     name:"parvesh",
//     skill:'Js',
// }
// }

// let func1=func();
// console.log(typeof func);
// console.log(typeof func1);

let user={};

// Adding properties
user.name="parvesh";
user.skill='js';

// modify or update 
user.skill='Java'

// delete 
delete user.skill;

// console.log(user);

// let student ={
//     name:'joe',
//     education: 'Btech',
//     age: 35,

// }

// delete student.education
// console.log(student);

// computed property
// use [] inside the object
// [] - tell js to evaualte and use it value

// let fruit ="apple"
let fruit ;
let bag ={
    [fruit]:5,// apple :5
    fruit:10
}
// console.log(bag.undefined)

// check if the property exist

let student ={
    name:'joe',
    education: 'Btech',
    age: 35,
    address:{
        city: 'chd',
        pincode: 123456
    }
}
// in  key in object
// hasOwnProperty
console.log("city" in student.address)
