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

let firstname="parvesh";
let lastname="Kumar";
let nickname="";

let userName=firstname||lastname||nickname||"new user"
// console.log(userName);

if(firstname||lastname){
    console.log("welcome");
}