var animal = {};

animal.species = "bengal tiger";
animal["name"] = "Lisa";
animal.noises = [];

var noises = [];
noises = ["roar"];
noises.push("purr");
noises.unshift("growl");
noises[3] = "yawn";

console.log(noises.length);
console.log(noises[noises.length-1]);
console.log(noises);

animal.noises = noises;
noises[noises.length] = "hiss";

var animals = []; 
animals.push(animal);
var duck = {species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh']};
animals.push(duck);
var jackalope = {species: 'jackalope', name: "Lucky", nosises: ['stir', 'chomp', 'sniff']};
var tasmanianTiger = {species: 'tasmanian tiger', name: "Merv", noises: ['scream', 'slurp', 'laugh']};
animals.push(jackalope, tasmanianTiger);
console.log(animals);
console.log(animals.length);

var friends = [];
//I choose an array because, to quote MDN, "arrays inherit from Array.prototype which provides to them a handful of convenient methods to manipulate". This makes them perfect candidates for lists.
function getAnimal() {
  return Math.floor(Math.random() * animals.length);
}
console.log(getAnimal());

console.log(animals[getAnimal()]);

console.log(animals[getAnimal()].name);

friends.push(animals[getAnimal()].name);

console.log(friends);


console.log(duck.friends = friends);

console.log(duck);


console.log(animal.name);

function search(animalName) {
  for (var i = 0; i < animals.length; i++) {
    if (animalName === animals[i].name) return animals[i];
  }
  return null;
};
  
console.log(search("Lisa"));

function edit(animalName, object) {
  for(var i = 0; i < animals.length; i++) {
    if (animalName === animals[i].name) {
       animals[i] = object;
       return object;
    }
  }
  
}

function remove(animalName) {
  for(var i = 0; i < animals.length; i++) {
   if (animalName === animals[i].name) {
    animals.splice(i,1);
     return animals;
   }
  }
      
}

function create(object) {
  for(var i = 0; i < animals.length; i++) {
  if (object.name.length > 0 && object.species.length > 0 && object.name !== animals[i].name) {
    console.log(animals.push(object));
    return animals;
    }
  }
}




