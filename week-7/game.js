 // Design Basic Game Solo Challenge

// This is a solo challenge


//Game Name//
// Cows-cape : Ground Relief //
// Your mission description:
// To leave the farm and find the city before being turned into ground beef//


// Overall mission:
// Escape the farm
// Goals:
// 1. Avoid farmer butch
// 2. Eat at least 10 patches of grass before leaving farm
//
// Characters:
// Cow (you)
// Farmer Butch
// Heffer
// Bull

// Objects:
// Grass
// Bell
// Gate

// Functions:

// eatGrass
// ringBell
// openGate
// moo
// look
// use

// Pseudocode
// 1. Story intro - print to console that you are a self aware cow and you know that
// you are about to be turned into beef. You must exit the gate to free a farmer butch.
//
// 2. Print to console the items that are around you, instruct user to "look" at these
// items to figure out their value.
//
// 2. Define property look for each item "this.look" for gate "this.look" for grass, this.look for bell, this.look for heffer.

// 3. You can use each item. If you use gate before collecting 10 patches, you die of
// starvation. Also, you cannot use gate if butch.location is gate (which is
// completely random). **For later, define a mood of butch. if Butch is in a good mood,
// he might let you leave. or maybe using moo to lure butch away from the gate.

// 4. Define look property/function for each object

// 5. Define use property/function for each object. Use grass should collect grass and
// report to console how many grass patches you have eaten. Use gate will complete
// game if cow.grassCount is greater or equal to 10.

// 6. define moo - not sure yet, but this might do nothing.



// Initial Code

//Title Scene
console.log("COWSCAPE! - GROUND RELIEF part 1");
console.log('');
console.log('');


//Intro

console.log("You wake up to the shreaking sound of Moooo and the disctinct smell of animal excrement lingering in your nostrils.");
console.log("");
console.log("In a confused stupor, you reach for your phone and find that you don't even have a hand to reach with, you have hooves...and you are naked.");
console.log("");
console.log("No, you are not a cool centaur, not even a griffen, you are....a cow!, and that shreaking is the sound of a cow becoming ground beef. ");
console.log("");
console.log("You don't know how you got here, but you know you must escape or you may turn into ground beef! ");

// Define Objective
console.log("");
console.log("It's time to get out, You appear to be in a field next to a farmhouse. Next to you is another cow. There is gate not too far from here, and grass patches everywhere that look nutricous(for some reason...) Look around to learn more about each item. ");
//Counted Items
var grassCount = 0;
var gameWin = false;


function buildItem(look,use,moo) { //item constructor
  this.look = look;
  this.use = use;
  this.moo = moo;
  this.open = this.use; // open and use have the same action
};

var gate = new buildItem("This looks like my way out, I wonder if I can use this.", //construct gate object
  function use(){
     if (grassCount >= 3){
    console.log("You've left the farm and can eat grass unharmed forver.");
    gameWin = true;
    } else {
      console.log("Eat more grass to fill up your stomach(s) before you leave");
    };

  },"Your moo is strong, mighty cow, but it will not mooove this gate!");

var grass = new buildItem("I think I digest that", //construct grass object
                        function use(){
  grassCount += 1;
  console.log("You have consumed " + grassCount + "patches of grass");
},"You moo at the grass, it grows even slower.");

//similarities



// Experiment with readline /////////////////

// var readline = require('readline');

// var answer = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// answer.question("What is your command? ", function(answer) {
// if (answer == "moo gate") {
//   console.log(gate.moo);
// } else {
//   console.log("I dont recognize that command");
// }
// // answer.close();
// }) // end answer readline


 // stuff copied from coderpad

//  var item = prompt("Please enter an item","gate or grass");

// // var currentItemInPlay = item;

// // for(i = 0, i >= items.length, i++ ) {
// //   if items[i] === item[currentItemInPlay]

// //     var itemForAction = item[currentItemInPlay]


// //     for(itemForAction) {
// //         if itemForAction ===  action

// // }
// // }


// var item = prompt("Please enter an item","gate or grass");
// var action = prompt("Please enter what you want to do with" + item, "Look, Use, Moo");

// if (item == "gate" && action == "Use") {
//    gate.use();
// };
// else if (item == "gate")






// Refactored Code






// Reflection
//
//
//
//
//
//
//
//