// || OR , && AND, !NOT, ?? Nullish

//|| OR
// t||t //t
// f||t //t
// t||f //t
// f||f //f

if(2<3||3<4){
    // console.log("OR operator")
}

if(1||0){
    // console.log("true")
}

let hour=15;
if(hour<10|| hour>18){
    console.log("office is open");
}

// left to right
// convert boolean  true stops and return the value (original)
// all false return last value
// let result = value1||value2||value3;

let firstname=null;
let lastname="Kumar";
let nickname="";

let userName=firstname||lastname||nickname||"new user"
//  console.log(userName);

if(firstname||lastname){
    // console.log("welcome");
}

// && AND 

// t&&T //T
// F&&F // F
// F&&T //F
// F && F //F

let h=12
let m=30
 if(h==12 && m==31)
    {
    console.log(`value h :${h} and m ${m}`);
 }
//  console.log("learn and operator");

// let result=val1 && val2 && val3
//  left to right 
// each operand will converted to boolean
//  result false , stop and return original value.
// if all operand are true  , return last

let fname="parvesh";
let lname="kumar";
let Hname="pa";

let adminName=fname && lname && Hname 
//  console.log(adminName);

// console.log(1&&0) //0
if(1 && 0){ // if(0)
    console.log("inside if");
}

// console.log(1 && 5)
// console.log(0 && "home" )

// NOT !
// !true // false
// !false // true

let j=12;

if(j!=13){
    // console.log("inside if");
}

// console.log(!0 && "home" )

//  console.log(null|| 2|| undefined);

// console.log(1 && null && 0)

// console.log(null ||2 && 3 || 4);//3
// null||3||4 //3

// ?? Nullish

// check value is null of undefined , if yes move to next value
// all null , return the last

let cmpName=null;

//  console.log(cmpName ?? "not mentioned");
// console.log(cmpName || "not mentioned");

let score=0;
// console.log(score ?? "didn't bat");

let bal="";
// console.log(bal ?? "account close");

let fname1;
let lname1;
let Hname1;

let adminName1=fname1 ?? lname1 ?? Hname1 
//   console.log(adminName1);

// optional chaining operator
// ?. check if value exist , return value or undefined. 

let user={
    name: "parvesh",
    // address:{
    //     city:"chd"
    // }
}

console.log(user.address?.city)









