/**
 * Created by Christian on 2017-02-05.
 */


// **************** Basic functions ***************************************************************
    //6 basic types of values
var myNumber = 5;                       //Number n^64, 18 zeroes
// Special cases: Infinity, -Infinity & NaN (Not a number) are all valid integers
// NaN == NaN > false, use isNaN(myNumber)
var myDecimal = 1.5;                    //15 zeroes, i.e. not precis valuesll
var myString = 'Hello World!';          //String
console.log(typeof myDecimal);
console.log(typeof myString);

var myBool = true;                      //Boolean
/*
falsy:
false, 0, "", null, undefined, NaN
all else are truesy
 */
var myObject = {                        //Object
    name : "Triangle",
    Lenght : 10,
    Hello : function () {
        alert("Hello World!")

    }
};
var myFunction = function () {     //Function
    return true;

};
var undefined;                          //Undefined Value
var myNull = null;                      //Null


//ternary operator = operates on 3 values, e.g.
//      true ? 1 : 2    //  > 1
//      false ? 1 : 2   //  > 2
//Binary operator =  operates on 2 values, e.g. + - /*
//Unary operator = operates on 1 value, - typeof

// == and != do cause auto conversion meaning 0 == false and "" == false return true
// === and !== do not auto convert, meaning 0 === false and "" !== false return false

// Highest prior > lowest Prio
//  */ +- == && ||
//1 + 1 == 2 && 10 * 10 > 50

//The || operator, will return the value to its left when that can be converted to true
// and will return the value on its right otherwise
console.log(null || "user")
// → user
console.log("Karl" || "user")
// → Karl

//The && operator works similarly, but the other way around.
// When the value to its left // is something that converts to false,
// it returns that value, and otherwise it returns the value on its right.


/* Arrays
    .push(x)    - adds item to end
    .pop(x)     - removes and returns item from end
    .shift(x)   - adds item to start
    .unshift(x) - removes and returns item from start

    indexOf     - starts from start, returns index from left>
    lastIndexOf - starts from end, returns index from left>
    slice(x, y) - returns slice of the array, x inclusive, y exclusive and optional
 */
var myArray = ['red', 'blue', 'green'];   //Basic array
myArray.push('purple');
console.log(myNumber);
console.log(myArray.reverse());

// Break breaks the loop entirely
// Continue stops the current iteration and continues with the next


for(var i=0; i <3; i++){
    console.log('For-loop:' +i);
}

var j = 0;
while(j<3){
    console.log('While-loop: ' +j);
    j++;
}

myArray.forEach(function(i){
    console.log("myArray: "+i);
} );

var doSwitch  = function () {
    switch (prompt("What is the weather like?")) {
        case "rainy":
            console.log("Remember to bring an umbrella.");
            break;
        case "sunny":
            console.log("Dress lightly.");  //No Break, execution continues until break
        case "cloudy":
            console.log("Go outside.");
            break;
        default:                            //Default will run if no case matches
            console.log("Unknown weather type!");
            break;
    }
};

var doLoop = function () {
    do {
        var yourName = prompt("Who are you?");
    } while (!yourName);
    console.log(yourName);
};


// **************** Objects ***********************************************************************

var person = {
    firstName : 'Petter',
    lastName : 'Robsson',
    age : 18,
    children : ['Kurt', 'Benny'],
    address : {     //embedded object
        street: 'storgatan',
        city : 'storstan',
        state : 'BLE'
    },
    fullName : function(){
        return this.firstName + " " + this.lastName;  //this the current object it is in
    }
};

console.log("Person-object: "+person.firstName);
console.log("Person-object: "+person.children[1]);
console.log("Person-object: "+person.address.state);
console.log("Person-object: "+person.fullName());

person.tester = "Test";
console.log(person.tester);
console.log("tester" in person);
console.log(["tester"] in person);  //targets property called "tester", works in case of "aa bb"
for(var property in person){
    console.log("the person-object has property: '"+property + "' with value: " +person[property]);
}
delete person.tester;
console.log(person.tester);


//Object constructor
//not very useful in the case of similar objects, as you have to repeat this for every object
var apple = new Object();
apple.color = "red";
apple.shape = "round";
apple.describe = function () {
    return "an apple is the color " + this.color + " and is the shape " +this.shape;
};
console.log(apple.describe());

//Constructor pattern
function Fruit(name, color, shape){
    this.name = name;
    this.color = color;
    this.shape = shape;

    this.describe = function() {
        return "an "+ this.name +" is the color " + this.color + " and is the shape " +this.shape;
    }
}

var appleFruit = new Fruit("Apple", "Red", "Round");
var melon = new Fruit("Melon", "Green", "Round");

console.log(appleFruit);
console.log(melon.describe());

// List test
var list = {
    value : 1,
    rest : {
        value : 2,
        rest : {
            value : 3,
            rest : null
        }
    }
};
var list2 = {
    value : 0,
    rest : list
};
var list3 = {
    value : -1,
    rest : list
};


// JSON Array
var users = [
    {
        name : "John Doe",
        age : 30
    },
    {
        name : "John Poe",
        age : 31
    },
    {
        name : "John Goe",
        age : 32
    }

];
console.log(users[0]);
console.log(users[0].name);


var mySQLStatement = "Select * from obd_objectdata;";
console.log(mySQLStatement);
mySQLStatement.trim();
console.log(mySQLStatement);



// **************** functions ************************************************************************
// Shorthand version of var XX = function (){}
// Functions can be defined at the bottom, they are conceptually moved to the top of their scope
// Be careful with functions defined in nested if statements and such, those are not moved outside their scope

//params are not required. If to few are specified when the function is called they are filled with 'undefined'
//if too many params are provided, they are simply ignored
function doClick(x, y, z){
    alert("You Clicked!");
}
function changeText(id){
    id.innerHTML = 'You Clicked!';
}
function changeText2(){
    var heading = document.getElementById('ButtonTest');
    heading.innerHTML = 'You Clicked!';
}
function showDate(){
    document.getElementById("time");
    time.innerHTML = Date();
}
function clearDate(){
    document.getElementById("time");
    time.innerHTML = "";
}
function changeBackground(x){
    console.log(x.value);
    var body = document.getElementById("body");
    body.style.backgroundColor = x.value;
}
function validateForm(){
    //Man bör använda jquery eller annat lib än att skriver detta manuellt
    var firstName = document.forms["myForm"]["firstName"].value;
    if(firstName === null || firstName === "" ){
        alert("First name is required!");
        return false;
    } else if (firstName.length < 3){
        alert("First name must have atleast 3 characters");
        return false;
    }
}
function doPrompt(){
    prompt("Tell me everything you know");
};
function doConfirm() {
    confirm("Shall we, then?");
};
function createTriangle(){
    triangle = "#";
    for(var i = 0; i<7; i++){
        console.log(triangle);
        triangle += "#";
    }
};
function fizzBuzz(){
    var counter = 0;
    while(counter < 100) {
        counter++;
        if (counter === 3)
            console.log("Fizz");
        else if (counter % 5 === 0)
            console.log("Buzz");
        else
            console.log(counter);
    }
};
function createChessBoard(){
    size = 8;
    var board = "";
    for(var j=0; j<size/2; j++){
        for(var i=0; i<size*2; i++){
            if(i === size){
                board += "\n";
            }
            else if(i%2 === 0){
                board += " ";
            } else {
                board += "#";
            }
        }
        console.log(board);
        board = "";
    }
};
function returnMin(x, y){
    if(x < y)
        return x;
    else
        return y;
};
function isEven(number){
    if(number == 0){
        return true;
    } else if (number == 1 ||number == -1){
        return false;
    } else{
        return isEven(number-2);
    }


};
function countBs(word){
    return countChar(word, "B");
}
function countChar(word, character){
    var counter = 0;
    for(var i = 0; i < word.length; i++){
        if(word[i] == character)
            counter++;
    }
    return counter;
};
function argumentTester(){
    //shows the amount of arguments passed to the function, as well as the position and actual value
    //the arguments object is not a array and lacks many of the functions an array exposes
    console.log("amount of args given: "+ arguments.length);
    for(var args in arguments){
        console.log("pos: " + args + " value: " + arguments[args]);
    }
};
function showGlobal(){
    //All defined variable are stored in the global object
    //this function prints all defined variables and their values
    for(var args in window){
        console.log("variable: "+args+" value: " + window[args]);
    }
};
/**
 * returns an array holding the range between start and end
 * Optional step parameter adjusts steps
 * @param {integer} start
 * @param {integer} end
 * @param {integer} [step=1] step
 * @returns {array}
 */
function range(start, end, step){
    //TODO: fix start > end case with positive step
    //TODO: fix end > start case with positive step
    temp = [];
    if(arguments.length == 2 && typeof start == "number"
        && typeof end == "number"){
        step = 1;
    } else if(arguments.length == 3 && typeof start == "number"
        && typeof end == "number" && typeof step == "number"){
        //validation case when stepper given
    } else {
        return -1;
    }

    if(step >= 0) {
        //Counting upwards
        for (var i = start; i <= end; i+=step) {
            temp.push(i);
        }
    } else {
        for (var i = start; i >= end; i+=step) {
            temp.push(i);
        }
    }

    return temp;
};
function sum(numberArray){
    var counter = 0;
    for(var i = 0; i < numberArray.length; i++){
        counter += numberArray[i];
    }
    return counter;
};
function reverseArray(myArray){
    temp = [];
    for(var i = 0; i < myArray.length; i++){
        temp.unshift(myArray[i]);
    }
    return temp;
};
function reverseArrayInPlace(myArray){
    var temp = [];
    for (var i = 0; i < Math.floor(myArray.length/2);i++) {
        temp[i] = myArray[i]; //save first part of array, so it won't be overwritten
        myArray[i] = myArray[myArray.length - 1 - i]; //replace one of the elements in the first half of the array with the corresponding element in the back half of the array
        myArray[myArray.length - 1 - i] = temp[i]; //replace one of the elements in the back half of the array with the corresponding element in the first half of the array that was placed in safekeeping in a temporary variable
    }
    return myArray;

};
function arrayToList(myArray) {
    var myList =  null;
    for(var i = myArray.length -1; i >= 0; i--){
        myList = prepend(myArray[i], myList);
        //myList = {value : myArray[i], rest : myList}; Alternative without helper function
    }
    return myList;
};
function listToArray(myList) {
    var myArray = [];
    for(var node = myList; node; node = node.rest){
        //advances by going to the next rest every time, eventually null is reached causing the loop to stop
        myArray.push(node.value);
    }
    return myArray;
};
function prepend(element, myList) {
    //new list adds element to the front of list
    var tempList = {
        value : element,
        rest : myList
    };
    return tempList;
};
function nth(myList, number) {
    //returns element at givem pos or undefinde when there is no element
    //recursive!!
    if(number == 0 && myList.value != undefined){
        //reached element
        return myList.value;
    } else if(myList.rest != undefined) {
        return nth(myList.rest, number -1);
    } else {
        return undefined;
    }

};
function deepEqual(value1, value2) {

    if(typeof value1 == "object" && typeof value2 == "object"
        && value1 != null && value2 != null){
        //deep equal on object properties

        if(value1.length == value2.length){     //undefined, fungerar ej  på object!
            for(var property in value1){
                if(value2[property]){
                    if(!deepEqual(value1[property], value2[property]))
                        return false;
                } else
                    return false;
            }
        } else
            return false;

    } else if (value1 != null && value2 != null){
        //simple compare
        if(value1 === value2){
            return true;
        } else
            return false;
    }
    return true;
};