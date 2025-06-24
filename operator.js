console.log("****************************OPERATORRS*******************************************")

for(i=1;i<=11;++i)
console.log(i)

console.log("******************arithmetoc operator*******************************")
let a=10;
let b=5;
console.log("a+b=",a+b)
console.log("a-b=",a-b)
console.log("a*b=",a*b)
console.log("a/b=",a/b)
console.log("a%b=",a%b)
console.log("a**b=",a**b)
console.log("********************************************************")
console.log("********************************************************")
console.log("********************************************************")

console.log("*********************unary operator*********************************")
console.log("a++=",a++)
console.log("a--=",a--)
console.log("++a=",++a)
console.log("--a=",--a)
console.log("********************************************************")
console.log("********************************************************")
console.log("********************************************************")

console.log("*********************assignment operator*********************************")

console.log("a+b=",a+=b)
console.log("a-b=",a-=b)
console.log("a*b=",a*=b)
console.log("a/b=",a/=b)
console.log("a%b=",a%=b)
console.log("a**b=",a**=b)
console.log("********************************************************")
console.log("********************************************************")
console.log("********************************************************")

console.log("*********************logical operator*********************************")
console.log("a&&b=",a&&b)
console.log("a||b=",a||b)
console.log("a!=b=",a!=b)
console.log("********************************************************")
console.log("********************************************************")
console.log("********************************************************")

console.log("******************comparison operator*******************************")
console.log("a==b=",a==b)
console.log("a===b=",a===b)
console.log("a!=b=",a!=b)
console.log("a!==b=",a!==b)
console.log("a>=b=",a>=b)
console.log("a<=b=",a<=b)
console.log("a>b=",a>b)
console.log("a<b=",a<b)
console.log("********************************************************")
console.log("********************************************************")
console.log("********************************************************")

console.log("*******************ternary operator***********************")
let result= a>b?"a is greater":"b is greater";
console.log(result)
let result1 = a===b?"equal":"not equal";
console.log(result1)
console.log("********************************************************")
console.log("********************************************************")
console.log("********************************************************")


console.log("*******************nullish operator***********************")
//let a
//console.log(a??70)//...........extra example 

let users={
    student:{
        name :'kshtijia',
        age:23
    }
}
console.log(users.student.name??'xyz')//kshitija
console.log(users.student.age??'45')//23

let user;
console.log(user??'anonymous')//anonymous
var user1='john';
console.log(user1??'anonymous')//john

console.log("********************************************************")
console.log("********************************************************")
console.log("********************************************************")

console.log("******************string comparison*******************************")

//alphabetical comparison=here strings are compared alphabetically
console.log("apple"<"banana");
console.log("car">"Cat");//uppercase in unicode
console.log("zoo"<"apple")
console.log("***************************************************************************")
console.log("***************************************************************************")
console.log("***************************************************************************")
//equality comparison
// (==){loose equality}:-compare values,ignores type.
//(===){strict equality}:-compares both value and type 
let a1="hello";
let b1="hello";
let c="Hello";
console.log(a1==b1);
console.log(a1===b1);
console.log(a1===b1);
console.log("********************************************************")
console.log("********************************************************")
console.log("********************************************************")





