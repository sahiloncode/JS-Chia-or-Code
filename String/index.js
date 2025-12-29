let name = "Sahil Rajput";
let Age = 21;
console.log(`My Name is ${name} and My Age is ${Age}`);

const myName = "Luffy";
console.log(myName.length); // Output: 5
console.log(myName.toLowerCase()); // Output: luffy
console.log(myName.toUpperCase()); // Output: LUFFY
console.log(myName.charAt("3")); // Output: f
console.log(myName.indexOf("L")); // Output: 0
console.log(myName.indexOf("f")); // Output: 2
console.log(myName.slice(1, 4)); // Output: uff
console.log(myName.replace("L", "R")); // Output: Ruffy
console.log(myName.includes("u")); // Output: true
console.log(myName.split("")); // Output: [ 'L', 'u', 'f', 'f', 'y' ]
console.log(myName.split("f")); // Output: [ 'Lu', '', 'y' ]
console.log(myName.startsWith("L")); // Output: true
console.log(myName.endsWith("y")); // Output: true
console.log(myName.repeat(3)); // Output: LuffyLuffyLuffy
console.log(myName.trim()); // Output: Luffy
console.log(myName.concat(" Monkey D. Luffy")); // Output: Luffy Monkey D. Luffy
