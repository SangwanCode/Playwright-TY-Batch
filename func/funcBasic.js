// syntax


// function --keyword followed by name of the function 
// parameters --optional
// body of the function


//declaration --create
function message1(){
    console.log("hello");
};
//calling function --running

// message1();

// local and global(outer) variable

//local : declared inside the function is only visiable to function ,
// or only function can access it



// function showMessage(){

//    let message="welcome";
//    console.log(message);
// }

// showMessage();
// console.log(message);

// global variable : scope avialble to all

// let username='john';

// function greet(){

//    let message =`Hello : ${username}`;
//    console.log(message);
// }

// greet();

// console.log(username);

//if local and global variables are same

let username='john';

function greet(){
   // let username='bob';
    username='bob';
   let message =`Hello : ${username}`;
   console.log(message);
}

greet();
console.log(username);
