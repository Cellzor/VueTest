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
var myArray = ['red', 'blue', 'green'];   //Basic array

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

var doSwitch  =function () {
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




// **************** Events ************************************************************************
function doClick(){
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
}