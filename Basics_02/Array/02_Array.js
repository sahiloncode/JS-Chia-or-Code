const Marvel_Heroes = ["Ironman", "Spiderman", "Thor"];
const DC_Heroes = ["Batman", "Superman", "Flash"];
// Marvel_Heroes.push(DC_Heroes);
// console.log(Marvel_Heroes)
// ;
// const allHeroes = Marvel_Heroes.concat(DC_Heroes);
// console.log(allHeroes);

const allHeroes = [...Marvel_Heroes, ...DC_Heroes];
// console.log(allHeroes);

const another_Array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11, 12]], 13];
const another_Real_Array = another_Array.flat(Infinity);
//  console.log(another_Real_Array);

// console.log(Array.isArray("Sahil Rajput"));
// console.log(Array.from("Sahil Rajput"));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
//+++++++++++++++++ learn About Is, Of, From in Array +++++++++++
