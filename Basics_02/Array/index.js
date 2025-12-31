// ++++++++++++Array in JavaScript+++++++++++
const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myHeros = ["Ironman", "Spiderman", "Thor"];

const myArr2 = new Array(6, 7, 8, 9, 10);
// console.log(myArr[2]);

// ++++++++++++Array Methods in JavaScript+++++++++++

// myArr.push(11);
// myArr.pop();
// console.log(myArr);

// myArr.unshift(10); // adds 10 at the beginning
// myArr.shift(); // removes first element
// console.log(myArr);

// console.log(myArr.includes(11));
// console.log(myArr.indexOf(2));

// const newArr = myArr.join();
// console.log(newArr);
// console.log(typeof newArr);


console.log("A" , myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1, 3);
console.log(myn2);
console.log("C", myArr);

