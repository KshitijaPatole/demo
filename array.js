let a=[1,2,3,49,5]
console.log(a)
console.log(a[2])
a[4]=32
console.log(a)
console.log(a.length-1)

let str=["computer",35,"laptop",58,40,"mouse",'a',11,"keyboard"]
console.log(str)
console.log(str.length)
for(let i=0;i<str.length;i++)
{
    console.log(str[i])
}

let matrix=[
    [1,2,3],
    [4,5,6]
]
console.log(matrix[0][1])
// Data structure using in Array

//LIFO-Stack -pop method ,push method
//FIFO-Queue-shift method ,Unshift method
//push method-add element at the end
//pop method-remove element at the end
//unshift method-add element from the begining
//shift method -remeove element from the begining
 let arr=["banana","mango","grapes","chikku"]
  console.log(arr)
  arr.push("apple")
  console.log(arr)
 arr.unshift("jackfruit")
  console.log(arr)
  arr.pop()
  console.log(arr)
  arr.shift()
  console.log(arr)
  arr[2]="ttttt"
  console.log(arr)
 //Array referance 
  let p=arr
 console.log(p)

 for(let fruit of arr)  //for-of
 {
    console.log(fruit)
 }

 for(let fruit in arr)  //for-in
 {
    console.log(fruit)
 }
 fruit.toString()
console.log(fruit)
