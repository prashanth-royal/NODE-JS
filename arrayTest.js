let origDogs = ["Labrador", "German Shepherd", "Pit bull"];
let cats = new Array("American Curl", "Bengal");
let birds = new Array("Penguins", "Ducks", "Eagles");

// Array Copy Elements
let slicedDogs = origDogs.slice(1, 2);
let copyDogs = [...origDogs];
let dogs = origDogs.slice(0);

//Stack Functions (LIFO) Push and Pop
let pushDog = dogs.push("ShihTzu");
let popDog = dogs.pop();
dogs[dogs.length] = "Labrador";

//Add and Remove from First
let addFirst = dogs.unshift("ShihTzu");
let shiftDog = dogs.shift();

//Atomic add and remove elements (where, how many to remove, element list)
dogs.splice(2, 1, "Husky", "Pomeranian");

//Array Function - Concat, Slice and Sort
let animals = dogs.concat(cats,birds);
let newAnimal = [...dogs, ...cats, ...birds].toString();
let sortDog = dogs.slice(0).sort();
function scanArray([first, second]) { console.log("Scan: "+first + " " +second); }
scanArray(animals);
let joinAnimals = animals.join(" ");
let allAnimals = "";
for (let animal of animals) allAnimals += animal + " ";
console.log("Animals: " + allAnimals);
