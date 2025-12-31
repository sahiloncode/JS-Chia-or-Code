//Stack Memory is Used in Primitive Daya Types
//Heap Memory is Used in Non Primitive Data Types


let FullName = "Sahil Rajput";
let MyName = "Sahil";
MyName="Rajput";
console.log(FullName);
console.log(MyName);

// in that example FullName is stored in Stack Memory and MyName is also stored in Stack Memory but when we change the value of MyName It Replace the Previous Value of MyNmae With the New Value.


let userOne ={
    Name : "Sahil",
    Age : 21
}

let userTwo = userOne;
userTwo.Name = "Rajput";

console.log(userOne.Name);
console.log(userTwo.Name);
