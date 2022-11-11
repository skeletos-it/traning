//Q1
const a = {
    msg: "hi"
};

const b = a;
b.msg = "Hello";
console.log(a, b);

//Q2


let x = [1, 2, 3];
let y = [4, 5, 6];
console.log(x + y);


//Q3
const arr = [10, 20, 30];
arr.push(40);
console.log(arr);
const arr1 = [10, 20, 30];
//arr1 = [];
//console, log(arr1);
const arr2 = [10, 20, 30];
arr2[2] = 50;
console.log(arr2);
//Q4

var obj = {
    name: "neha", getName: function () { console.log(this.name);; }
}
var getName = obj.getName;
var obj2 = {
    name: "naina", getName
};
obj.getName();
obj2.getName();

//Q5
var me = 1;
function cs() {
    me = 10;
    return;
    function me() { }
}
cs();
console.log(me);


//Q6

const person = {
    name: "neha"

};
const array = [person, person, person];
array[1].name = "mjk",
    console.log(array[0].name);
//example

/*{
    carName = "Saab";
    let carName = volvo
    */
const cars = ["saab", "volvo", " BMW"]
console.log(cars)
// we can change an element of constant
cars[0] = "Toyota";
console.log(cars)
// we can add an element in constant
cars.push("Audi");
console.log(cars)

//same with constant object we can change a property and a property
const car = {
    type: "faint", model: 500, colour: "black"
}
console.log(car)
car.colour = "rad";
car.model = 850
console.log(car)

//Functions

let another = myFunction(4, 5)
function myFunction(a, b) {
    return a * b;
}
console.log(another)



// Strings
// we can use single aor double quotes to write strings
let mtName = "Anusha";
let mxName = 'Pranjal';
console.log(mtName)
console.log(mxName)


// to find length of the a string use the built-in length property
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(text)
console.log(length)

// replace
let bill = "please visit Microsoft and Microsoft";
let newBill = bill.replace("Microsoft", "Amazon");
console.log(bill)
console.log(newBill)


// Converting to upper and lower case

// UPPER CASE
let upper = "Hello World";
let upper1 = upper.toUpperCase();
console.log(upper)
console.log(upper1)

// LOWER CASE
let lower = "PRANJAL Zambre"
let lower2 = lower.toLocaleLowerCase()
console.log(lower)
console.log(lower2)

// CONCAT- joins 2 or more strings


let abc = "priynaka";
let xyz = "is a girl.";
let axy = abc.concat(" ", xyz);
console.log(abc)
console.log(xyz)
console.log(axy)

/* Extractig strings characters
3 methods
1- charAt(position)
2-charCodeAT(POSITION)
3-Property access []
*/


// charAt()
let wer = "HELLO WORLD!";
let qwe = text[3]
console.log(wer)
console.log(qwe)

// charCodeAt() 
/// The charCodeAt() method returns the unicode of the character at a given position in a string:

let uoi = "Wadia";
let poi = text.charCodeAt(3)
console.log(uoi)
console.log(poi)

// Property access

let qws = "hello world!";
let aqs = qws[4]
console.log(qws)
console.log(aqs)

// string search

/*string indexOf()
let str1 = "where locate occurs";
str1.indexOf("locate");
console.log(str)*/


//string search
let str = "Please locate where 'locate' occurs!";

console.log(str)

// infinity
let myNumber = 2;
// Execute until Infinity
while (myNumber != Infinity) {
    myNumber = myNumber * myNumber;
}
console.log(myNumber)


// array
cars.length // returns the number of elements in aaray
cars.sort() // sorts the aaray

// Accessing the aaray elements
//first aaray element
const fruits = ["Banana", "Orange", "Apple", "Mango"];
//Adding Array 
fruits.push("lemon");  // push adds a new element
let fruits1 = fruits[0]
console.log(fruits)

//Looping Array Elements

//for loop

const eds = ["abcd", "wxyz", "pqrs", "mnop"];
let fLen = eds.length;
for (let i = 0; i < fLen; i++) {
    console.log(eds[i]);
}







