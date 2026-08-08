// Passing the value and return the value

//single
function greet(name){

    let name1=name??"value not given";
    let message= "hello "+": "+ name1
    console.log(message)
}

// greet('john');

// multiple


// let from='Ravi'
// let username="john";

// function message(from , text){
//     // username='anna';
//     from="abc"; // same name then preference will be to local
//     from='* '+from+'*';
//     console.log(from + " : " + text);
// }

// message(from,"welcome");
//  console.log(from);
// console.log(username);

// if global var passed as argument then function
// will get the copy of the variable
// if global var is used or modified inside the function then global var values changes


// let emp ="parvesh"
// let access= "IT"

// function check(name){
//     access=access+"join"; //It join
//     let yourEmp= emp+"joined"; //parvesh joined

//     console.log(yourEmp );
// }

// check(emp)
// console.log(emp)
// console.log(access)

// parameter: placeholder to hold value
//argument : pass value for the function

//let a;
// let a=12;

// Default value 

// function message(from , text="not given"){   
//     from='* '+from+'*';
//     console.log(from + " : " + text);
// }

//  message("parvesh","icici");

// optional operator ?. 

// function message(from , text){   
//     from='* '+from+'*';
//     let comp = text?.toUpperCase();
//     console.log("welcome message");
//     console.log(from + " : " + comp);
// }

// message("parvesh")


 // Return

function add(a,b){   

//    console.log(a+b);     
   return a+b;
//    console.log("already return");
  
}

//  add(3,4);
// let sum= add(3,4);
// console.log(sum);

function message(){
    console.log("welcome");
    return 1;
}

//  message(); // welcome
//  console.log(message());

// let a=3
// let b=4

// console.log(a+b);

function checkage(age){
    if(age>=18){
        return true;

    } else{
        return false;
    }
}
// checkage(12)?console.log("access"):
// console.log("denied");
// checkage(19)?checkage(19):
// console.log("denied");
// ?:


let result;
function add(a,b){
    //   result=a+b;
     return a+b;
}
// add(5,6);
// add(7,8);
// // result =90;
// console.log(result);
let sum=add(5,6);
let sum1=add(7,8);
// result =90;
console.log(sum,sum1);

// let sum=add(5,6)
// console.log(sum);