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

function message(from , text){   
    from='* '+from+'*';
    let comp = text?.toUpperCase();
    console.log("welcome message");
    console.log(from + " : " + comp);
}

 message("parvesh");


 // Return