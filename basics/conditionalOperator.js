// actions taken on the basis of condition .

// if , if else , if else if , ?:

// if() {}

// if(0){
//     console.log("hello");
// }

let age = 23;
let vote;
if(age==18){  
    vote="you can vote"
}else if(age>=21)
{
    vote="go and find the job"
}else{
    vote="go and study now"
}

// console.log(vote);

//?: condition ? true :false
 vote=age<18?"go for vote":"only study";
// console.log(vote);

let message = age<5?"Hi":
                age==5?"welcome to school":
                "what is your age";
 console.log(message);               
