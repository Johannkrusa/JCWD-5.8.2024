// object oriented programming;

// where green text clarifies that it's a class
var str =  new String("abcd");
var str2 = ("abcd");

var arr = [];
var arr2 = new Array([]);

arr2.join(",");

var car = {
    name: "BMW",
    color: "Black"
};

console.log(car);

var date =  new Date("2022-01-02");

var car2 = new Object({
    name: "BMW",
    color: "Black",
    run:() => {
        console.log("run");
    }
});

console.log(car2.name);
car2.price = 10000000;
console.log(car2);

car2.run();

var name = "ayaya";

String.prototype.getName = function(){
    console.log("Hello ", this);
}

name.getName();

car.drive = function drive () {
    console.log("drive function executed");
}
car.drive();

console.log(car);

delete car.drive;

console.log(car);

console.log(car["color"]);
// or
console.log(car.color);
// or
var word = "color";
console.log(car[word]);

// optional chaining, similar to ternary 
var age = 33 >= 17 ? "adult" : "minor"; // ternary
console.log(age);

var person = {
    address:{
        city:"Melbourne"
    }
};

// optional chaining
console.log(person.address?.city)
// another way to write it 
console.log(person.address ? person.address.city : person.address);


// accessing keys, and make it into an array

var npc = {
    name : "alex",
    age : 50,
    job : "construction worker"
};

console.log(Object.keys(npc));

for (key in npc){
    console.log(key,"----->",npc[key]);
}

// [] for an array or string its asking for the index
// [] for an object, its asking for a key

// spread operator similar to rest while rest if for function, spread is for object and array


var num1 = [1,2,3];
var num2 = [4,5,6];

var res =  [...num1, ...num2];

console.log(res);

var res = [num1, num2];
 
console.log(res);

var obj1 = {
    name: "jason",
    age : 33,
    gender : "male",
    hobbies : "pokemon"
};

var obj2 = {
    name: "jasmine",
    age : 14,
    gender : "female",
    favorite_animal : "cat"
};

// create a new object by merging both properties, and overwrite properties that are the same
var res = {...obj1, ...obj2};

console.log(res);

// creates a new object by merges two into one object that consist of the two object
var res = {obj1, obj2};

console.log(res);

// this 

var npc = {
    name : "samantha",
    greet:function(){
        console.log(this);
        console.log(this.name, "say hello");
    }
}
npc.greet();

// object built in method 
// object.assign(), create, entried, freeze, is

// Sample NPC object
var npc = {
    name: "Eldric",
    type: "Wizard",
    level: 50
};

// Example for Object.assign()
console.log("assign");
const copiedNpc = Object.assign({}, npc);
console.log(copiedNpc);

// Example for Object.create()
console.log("create");
const newNpc = Object.create(npc);
console.log(newNpc);

// Example for Object.entries()
console.log("entries");
const npcEntries = Object.entries(npc);
console.log(npcEntries);

// Example for Object.freeze()
console.log("freeze");
Object.freeze(npc);
npc.name = "Gandalf"; // This won't change the name as the object is frozen
console.log(npc);

// Example for Object.is()
console.log("is");
const isEqual = Object.is(npc, copiedNpc);
console.log(isEqual); // Output will be false as they're two separate objects


// class 
// class = some sort of a blueprint to make an object, in js class is some sort of a function, quite similar 
// we may call it special function 

// class declaration 
// constructor = first method that gets executed when you make a new object 
class User {
    constructor(name){
        this.name = name;
    
    }
}

// function declaration
function User2(name){
    this.name = name;
}

// function expression
const User3 = class {
    name ="";
}

// class expression
const User4 = class {
    constructor(name){
        this.name = name;
    }
}

let objUser =  new User("Dimas");

console.log(objUser);

let objUser2 = new User2("Richard");

console.log(objUser2)

let objUser3 = new User3("Patrick");

console.log(objUser3);

let objUser4 = new User4("Indri");

console.log(objUser4);

// assigning new atttributes only effect the object being affected, not globally 
class User5 {
    name = '';
    greeting(){
        console.log(this.name, "says hello");
    }
}

let objUser5 = new User5;
let objUser5b = new User5;

objUser5.name = "Markus";
objUser5.age = 55;

console.log(objUser5);
console.log(objUser5b)

objUser5.greeting();

// private and public 

class npc_class {
    name = '';
    constructor(name){
        this.name = name;
    }
    #npc_ID = Math.floor(Math.random()* 99999)
    greeting(){
        console.log(this.name, "says hello");
    }
    getID()
    {
        console.log("npc id is", this.#npc_ID)
    }
}
let butcher = new npc_class("butcher");

// can only be accessed with a method inside the class
butcher.getID();
console.log(butcher);

// static properties
// cannot be accessed from an object from the class, can only be accessed by the class
class jobClass {
    name = "";
    #job_id = "";

    constructor(name) {
        this.name = name;

        // Calculate job_id using the ASCII values of the characters in name
        for (let i = 0; i < name.length; i++) {
            this.#job_id += name.charCodeAt(i);
        }
    }

    getID(){
        console.log(this.#job_id)
    }

    static weapon = "Long Spear";
    static getWeapon(){
        console.log("weapon of choice", this.weapon);
    }
}
// private cannot be accessed nor be changed outside the class, can only be changed by the method inside the class;
const warrior = new jobClass("Warrior");
console.log(warrior); 
// since job id is private, can only be called from an object
warrior.getID();

// static method can access static property, object cannot access them

console.log(jobClass.weapon); 
jobClass.getWeapon();

// setter and getter;

class Pokemon {
    name = "";
    typing = "";

    // makes it a property instead of a method
    set setName(name){
        if(!name){
            console.log("name is invalid");
            return;
        }
        else if(name.length <= 3){
            console.log("name must be more than 3 characters");
            return;
        }
        this.name = name;
    }
    get getName(){
        return this.name;
    }

    set setTyping(typing){
        this.typing = typing;
    }
    get getTyping(){
       return this.typing;
    }
}

// this should be avoided
let pikachu = new Pokemon();
pikachu.name = "pikachu";
console.log(pikachu)

// a more effective way
let charmander = new Pokemon();
// charmander.setName("Charmander"); be avoided
// console.log(charmander.getName()); also avoid

charmander.setName = "Charmander";
console.log(charmander.getName);