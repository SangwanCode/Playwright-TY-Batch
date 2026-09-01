// primitive -- copy By value
// Object -- copy by reference

// let a="hello";
// let b=a;
// b="parvesh Hello"
// console.log(b);
// console.log(a);

// let user ={name:'john'};
// let admin=user;

// admin.name="peter";
// admin.age=30;
// console.log(admin)
// console.log(user)

// comparsion
// 2 objects are same if they are refernce to same objec

// let a={age:30};
// let b=a;

// console.log(a==b) // true

// let a={}
// let b={}
// console.log(a===b) //false

// cloning --duplicate and merging

// let user={
//     name:'john',
//     age:30
// }
// let clone={}
// // 1. using the for loop
// for(let keys in user){
//     clone[keys]=user[keys];
// }
// console.log(clone)
// clone.name="peter"
// console.log(clone.name)
// console.log(user.name)

// 2. Object.assign(dest, sources)
// let user={
//     name:'john',
//     age:30
// }
// let clone={}
// Object.assign(clone,user)

//  clone.name="peter"
//  console.log(clone.name)
//  console.log(user.name)
//  console.log(clone)
//  console.log(user)
// let clone=Object.assign({},user)
// console.log(clone)

// adding more object --e.g adding permission

// let user={
//     name:'john',
//     age:30
// }

// let permission1={'canview':true};
// let permission2={'canEdit':true};

// Object.assign(user,permission1,permission2);
// console.log(user);

// let clone=Object.assign(user,permission1,permission2);
// console.log(clone)

// if same property : property overwritten

// let user={
//     name:'john'
// }

// Object.assign(user,{name:'peter'});
// console.log(user)

// 3. spread operator ...

// let user={
//     name:'john',  
// }

// let clone={...user}
// console.log(clone)
// clone.name='peter'
// console.log(clone)
// console.log(user)

// multiple objects
// let user={
//     name:'john',  
// }
// let permission1={'canview':true};
// let permission2={'canEdit':true};
// let clone={...user,...permission1,...permission2}
//  console.log(clone)
//  console.log(permission1==clone)

// Nested clone

// let user={ 
//     name:'john',
//     age:30,
//     address:{
//         city:'CHD',
//         pincode:12345
//     }
// }
// // console.log(user.address.city)
// let clone=Object.assign({},user);
// // console.log(clone)
//  console.log(clone.address==user.address) // true
// clone.name='peter'
// clone.address.city='Mohali'
// console.log(clone==user)// false both are independent
//  console.log(user.name)
//  console.log(user.address.city)

// Shallow cloning

//deep cloning : StructuredClone

let user={ 
    name:'john',
    age:30,
    address:{
        city:'CHD',
        pincode:12345
    }
}
let clone=structuredClone(user);
// console.log(clone.address==user.address) //false both are indepndent
clone.address.city="mohali";
console.log(clone.address.city)
console.log(user.address.city)



