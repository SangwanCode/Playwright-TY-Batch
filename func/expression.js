// function expression

// function welcome(){
//     console.log("hello");
// }

//  let greet= welcome;
//  welcome();
// console.log(typeof greet)

// another way to send the function as expresssion
let welcome= function(){
    console.log('hello');    
    }

//  console.log(typeof welcome);
//  welcome();
 let greet =welcome; // copy the variable to another variable
//  greet();

// Function declaration vs Function expression.

// declaration name is mandatory
// function name(){}

// expression : we can create annoymous function no name is required.

// fd : function declaration
// fe : function expression

// fd : treat as permanent employee

// rahul();
// function rahul(){
//     console.log("good morning");
// }

// js work
// 1. find all the declaration
// 2. create function
//3. start runing code
// 4. function call

//fe : contract employee

// rahul();
// let rahul= function() {
//     console.log("good morning");
// }

// fd created before code execution start, and fe is created only when js reach that line of code.

// Callback function: function as arugment in another function

function vote(age,yes,no){
    if (age>=18){
        yes();
    }else{
        no();
    }
}

function voteOk(){
    console.log("able to vote");
}

function voteCan(){
    console.log("still need to wait");
}

// vote(19,voteOk,voteCan);// vote()
// vote(12,function(){console.log("able to vote")},
// function(){console.log("need to wait")} )

// settime(func(),200)

// Arrow function
// ()=>{}

//   let func= (a,b)=>{
//     console.log("hello");
//     return a+b;    
//   }  

//   let result=func(5,6);
// console.log(result)

  let func= (a,b)=> a+b;  // no return required

  let result=func(5,6);
 console.log(result)


let abc=()=>"hello";
console.log(abc());


let greet1= ()=>{return "hello"}// required return if weare using {}

greet1();
console.log(greet1())

