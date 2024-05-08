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
}

console.log(car);

var date =  new Date("2022-01-02");

var car2 = new Object({
    name: "BMW",
    color: "Black",
    run:() => {
        console.log("run");
    }
})

console.log(car2.name);
car2.price = 10000000;
console.log(car2);

car2.run();

var name = "ayaya";

String.prototype.getName = function(){
    console.log("Hello ", this);
}

name.getName();
