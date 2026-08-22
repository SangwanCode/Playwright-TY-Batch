// Object --collection of key value pair
// dynamic data structure that stores related data
// as key- value pairs, where each key unquiely identify it' value

// how create an object
// 1. object literals{} 2. object constructor

// Object Constructor
let user1 =new Object();
user1.name="parvesh";
// object literals
let user2={};
// keys they are string or symbol
let user = {
    name:"parvesh",
    age:20,
    "city": 'chd'
}

// console.log(typeof user);
// console.log(user)
// two ways to access the object properties
//1. dot operator 2. bracket[]
// console.log(user.age)
// console.log(user['age']);

let whichSkill='skill';
let student={
    "first name":"parvesh",
    class:'Btech',
    skill:'js',
    0:"marks"

};
// console.log(typeof student);
// console.log(student["first name"]);
// console.log(student['0'])

//Dynamic property use the []

console.log(student[whichSkill]);




