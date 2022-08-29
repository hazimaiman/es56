//  //1)lets and const
//  //const mostly benda takkan berubah
//  //no more var always let for variable

//  const player ='booby';
//  let experience = 100;
//  let wizardLevel = false;

//  if (experience > 90 ){
//     let wizardLevel = true ;

//  }
//  //con property can chnge meanwhile obj cannot
//  const obj ={
//     player : 'aiman',
//     experience: 1232,
//     wizardLevel:false

//  }

 //2)Destructuring

//  const obj ={
//     player : 'aiman',
//     experience: 1232,
//     wizardLevel:false

//  }

//  const player = obj.player;
//  const experience= obj.experience;
//  let wizardLevel = obj.wizardLevel;
//  // sama je = tpi second coding more clean
//  const { player , experience }= obj;
//  let {wizardLevel} = obj;

//3)object properties
// const a = 'simon';
// const b = true;
// const c = {};

// const obj ={
//      a,
//      b,
//      c
     
// }

//4)Template strings
// const name = "sally";
// const age = 43;
// const pet =  "horse"

// //const greeting = "hello"+ name + " you seem to be doing" + greeting + "!"
// //button atas tab 

// const greeetingBest = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`
 
//5)defaultargument

// function greet (name = '', age =30, pet='cat') {
//     return  `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;
// }

//6) symbol 
// var sym1 = Symbol();
// var sym2 = Symbol('foo');
// var sym3 = Symbol('foo');

//7) arrow function 
function add ( a,b){
    return a + b;
}
 const add2 = (a,b)=> a +b;