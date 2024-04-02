// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

// Starting game
let attackPoints = 100;
let hitPoints = 100;


// actions 
function arcaneScepter(event){
    let attackPoints = apCost -12;
    let hitPoints = hpDamage -14;
    console.log('arcaneScepter')
   // arcaneScepter = document.getElementByClassId('attack-btn arcane-scepter');

};
function entangle(event){ 
    let attackPoints = apCost -23;
    let hitPoints = hpDamage -9;
    console.log('entangle')
  //  entangle = document.getElementByClassId('attack-btn entangle');
};
function dragonBlade(){
   let attackPoints = apCost -38;
   let hitPoints = hpDamage -47;
   console.log('dragonBlade')
  // dragonBlade= document.getElementByClassId('attack-btn dragon-blade');
};
function starFire(event){
    let attackPoints = apCost -33;
    let hitPoints = hpDamage -25;
    console.log('starFire')
  //  starFire = document.getElementByClassID('attack-btn star-fire');
 };


function onReady() {
    console.log("Ready to go!")
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
   
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}


onReady()