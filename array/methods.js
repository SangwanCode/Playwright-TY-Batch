// methods: Push And Pop

// Push -- append in last of the array

// let arr=[1,3,5,7]
// console.log(arr)
// arr.push(9)
// // console.log(arr.push(9))
// console.log(arr)

// let brw=[]

// brw.push('ch'); 
// brw.push('ff');
// brw.push('edge');
// brw.push('ch',"ff",'edge'); 
//  console.log(brw)

// pop --remove last value of array

// brw.pop(); // edge
// console.log(brw.pop()) //ff
// console.log(brw)
//2 ch ff

// unshift and shift // work on the begning on the array

// let arr=['ch','ff','edge']
// console.log(arr)
// arr.unshift('safari');
// console.log(arr.unshift('opera'));//return length
// console.log(arr)
// arr.unshift('safari',"brown","abc");
// console.log(arr)

// remove from start of the array

// arr.shift();
// arr.shift();
// arr.shift();
// console.log(arr)

// Performance : Push/pop 
//shift():
// 1. delete the first item
// 2. indexing to move
// 3. return length

//Unshift():

// splice: removing , inserting, replace

// syntax: arr.splice(start,deletecount, elements)

// delete

// let arr=["I","study","js"]
// let arr=[3,4,6,8,9,1,6]
// console.log(arr)
// arr.splice(2,2);
// console.log(arr)

// delete+replace
// let arr=["I","study","js","in","class"]
// console.log(arr)
// // arr.splice(2,1,"java");
// // arr.splice(2,2,"java");
// arr.splice(2,1,"java","at","morning");
// console.log(arr)

// insert
// let arr=["I","study","js"]
// console.log(arr)
// arr.splice(3,0,"in","class")
// console.log(arr)

// negative index
// let arr=[3,4,2,6,7]
// console.log(arr)
// arr.splice(-1,0)
// arr.splice(-1,1,9,7)//4

// arr.splice(-1,2,9,7)
// console.log(arr)//index 4 ,5 get deleted
// console.log(arr.at(-2))
// arr.splice(-2,2,9,7)//index 3 

// arr.splice(-3,2,1,3) //index 2,3 insert [34137]
// console.log(arr.splice(0,1,4))//return the deleted element
// console.log(arr)


// slice -- return the new array without make changes in original array

// syntax arr.slice(start,end)//end in not include

let arr=[3,4,5,2,7]
// let arr1=arr.slice(2,4)
// let arr1=arr.slice(2)// start from 2 till end

let arr1=arr.slice(-2,-1)
console.log(arr1)



