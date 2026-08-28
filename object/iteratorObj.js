// keys in the object "in", "hasOwnProperty"


let student ={
    name:'joe',
    education: 'Btech',
    age: 35,
    address:{
        city: 'chd',
        pincode: 123456
    }
}

// check all the keys --in
// loops w3school (for in)
// for(let abc in student){
//     console.log(abc + ":"+ student[abc]);
// }
// for(let abc in student.address){
//     console.log(abc + ":"+ student.address[abc]);
// } // return in key value pairs

// All keys at onces
// console.log(Object.keys(student));// return in array

// all values
// console.log(Object.values(student));

// all keys and values
// console.log(Object.entries(student));

let codes={
    '40':"Germany",
    "39":"UK",
    "+38": "ban",
    "+1": "Ind"
    //  name:'joe',
    // education: 'Btech',
    // age: 35,
}
// in case of interger the output is sorted 
for (let keys in codes){
    console.log(keys+" : "+ codes[keys]);
}
