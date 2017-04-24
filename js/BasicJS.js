/**
 * Created by Christian on 2017-02-05.
 */


// ****************Basic Data types***************************************************************
    //6 basic types of values
var myNumber = 5;                       //Number n^64, 18 zeroes
// Special cases: Infinity, -Infinity & NaN (Not a number) are all valid integers
// NaN == NaN > false, use isNaN(myNumber)
var myDecimal = 1.5;                    //15 zeroes, i.e. not precis valuesll
var myString = 'Hello World!';          //String
var undefined;                          //Undefined Value
var myNull = null;                      //Null
//console.log(typeof myDecimal);  //number
//console.log(typeof myString);   //string

var myBool = true;                      //Boolean
/*
falsy:
false, 0, "", null, undefined, NaN
  all else are truesy
 */
var myObject = {                        //Object
    name : "Triangle",
    Lenght : 10,
    Hello : function () {               //Method
        alert("Hello World!")

    }
};
var myFunction = function () {     //Function
    return true;

};

// ****************Basic Operators***************************************************************

//Unary operator = operates on 1 value, - typeof
//Binary operator =  operates on 2 values, e.g. + - /*
//ternary operator = operates on 3 values, e.g.
//      true ? 1 : 2    //  > 1
//      false ? 1 : 2   //  > 2


// == and != do cause auto conversion meaning 0 == false and "" == false return true
// === and !== do not auto convert, meaning 0 === false and "" !== false return false

// Highest prior > lowest Prio
//  */ +- == && ||
//example:  1 + 1 == 2 && 10 * 10 > 50
//          -> true

//The || operator, will return the value to its left when that can be converted to true
// and will return the value on its right otherwise

//console.log(null || "user");    // → user
//console.log("Karl" || "user");  // → Karl

//The && operator works similarly, but the other way around.
// When the value to its left is something that converts to false,
// it returns that value, and otherwise it returns the value on its right.


/* Arrays
    .push(x)    - adds item to end
    .pop(x)     - removes and returns item from end
    .shift(x)   - adds item to start
    .unshift(x) - removes and returns item from start

    indexOf     - starts from start, returns index from left>
    lastIndexOf - starts from end, returns index from left>
    slice(x, y) - returns slice of the array, x inclusive, y exclusive and optional
    .forEach(function(){})  - iterate over each object
    .filter( function(){})   - returns an array with specified filter, i.e. only inlcude elements with X
    .map ( function(){})     - returns array with only certain properties inlcuded, i.e. only propert x y z
    .reduce ( function(){})  - condenses an array to a single value by repeatedly combining values
 */
var myArray = ['red', 'blue', 'green'];   //Basic array
myArray.push('purple');
// console.log(myArray.reverse()); //["purple", "green", "blue", "red"]

/*
  Higher-order functions, the below are already defined on prototypes but are
  defined below to show how they work
  functor are objects that are implementing map, for example an array
    = takes value, function and returns the transformation in a structured value
  forEach is not a "functor-function" -> it doesn't return in a structured way by default
  filter is also no functor, only 'map' is
*/
function map(array, transform) {
    var mapped = [];
    for (var i = 0; i < array.length; i++)
        mapped.push(transform(array[i]));
    return mapped;
}
function filter(array, test) {
    var passed = [];
    for (var i = 0; i < array.length; i++) {
        if (test(array[i]))
            passed.push(array[i]);
    }
    return passed;
}
function reduce(array, combine, start) {
    // the standard function doesn't require start, array with 1 element will use that as start
    var current = start;
    for (var i = 0; i < array.length; i++)
        current = combine(current, array[i]);
    return current;
}

// **************** Iterative methods***************************************************************
// Break breaks the loop entirely
// Continue stops the current iteration and continues with the next


for(var i=0; i <3; i++){
    //console.log('For-loop:' +i); // For-loop: 1, For-loop: 2, For-loop: 3
}

var j = 0;
while(j<3){
    //console.log('While-loop: ' +j); // While-loop: 1, While-loop: 2, While-loop: 3
    j++;
}

myArray.forEach(function(i){
    //console.log("myArray: "+i); // myArray: red, myArray: blue, myArray: green, myArray: purple
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
// All objects, functions and arrays are derived from prototypes:
// object.prototype, function.prototype, array.prototype
// they receive their basic set of functions from the prototype, all of those are nonenumerable
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
    },
    get lenght() {
      return this.age;
    },
    set lenght(value){
      console.log("Ignoring attempt to set lenght to ", value);
    }
};
// When a getter but no setter is defined, writing to the property is simply ignored.

//console.log("Person-object: "+person.firstName);      //Person-object: Petter
//console.log("Person-object: "+person.children[1]);    //Person-object: Benny
//console.log("Person-object: "+person.address.state);  //Person-object: BLE
//console.log("Person-object: "+person.fullName());     //Person-object: Petter Robsson

/* ************ This and Bind
This = the object/scope/variable calling the function,
 this reference is dropped when function is assigned as below,
bind binds the person to the seperated function
*/
var PersonFunctionTest = person.fullName;               //undefined
var PersonFunctionTest = person.fullName.bind(person);  // Petter Robsson



person.tester = "Test";
//console.log(person.tester);         //Test
//console.log("tester" in person);    //true
//console.log(["tester"] in person);  //true - targets property called "tester"
for(var p in person){
    //console.log("the person-object has property: '"+ p + "' with value: " +person[p]);
    //prints all properties, functions are printed as-is
}
delete person.tester;
//console.log(person.tester); //undefined


//Object constructor
//not very useful in the case of similar objects, as you have to repeat this for every object
var apple = new Object();
apple.color = "red";
apple.shape = "round";
apple.describe = function () {
    return "an apple is the color " + this.color + " and is the shape " +this.shape;
};
//console.log(apple.describe()); //an apple is the color red and is the shape round

//Constructor pattern, creates a 'Fruit'-prototype
function Fruit(name, color, shape){
    this._name = name;  //if _ isn't present the getter is causing an infinite loop
    this.color = color;
    this.shape = shape;
}
//Below delcaration is needed to override when inherited
Fruit.prototype = {
    describe : function() {
        return "an "+ this.name +" is the color " + this.color + " and is the shape " +this.shape;
    },
    get name() {
      return this._name;

    }

}



// New <Constructor> creates an object based on the defined prototype
var appleFruit = new Fruit("Apple", "Red", "Round");
var melon = new Fruit("Melon", "Green", "Round");

//console.log(appleFruit);  //prints all properties
//console.log(melon.describe()); //an Melon is the color Green and is the shape Round

//Inheritence from Fruit with override of describe
function Vegetable(name, color, shape, weight){
  this.weight = weight
  Fruit.call(this, name, color, shape);
}
Vegetable.prototype = Object.create(Fruit.prototype);
Vegetable.prototype.describe = function(){
  return "I'm a vegetable!";
};
var tomato = new Vegetable("Tomato", "Red", "Round", 10);
//console.log(tomato.describe()); //I'm a vegetable!

// ---------------- instanceof - operator
//console.log(new Vegetable("A") instanceof Fruit); // → true
//console.log(new Vegetable("A") instanceof Fruit); // → true
//console.log(new Fruit("A") instanceof Vegetable); // → false
//console.log([1] instanceof Array);  // → true


// all defined properties are enumerated by default, meaning in / for loops are effected
// Define nonenumerable propery for Fruit
Object.defineProperty(Fruit.prototype, "hiddenNonsense",
                      {enumerable: false, value: "hi"});

//console.log(("toString" in melon)); // → true, checks prototypes
//console.log(melon.hasOwnProperty("toString")); // → false, skips prototypes

//Hence to ensure prototype changes won't fuck up code, when depending on properties use below:
// One problem with this is, the situation where 'hasOwnProperty' get redefined for the object, essentially overwriting the function
for (var name in melon) {
  if (melon.hasOwnProperty(name)) {
    // ... this is an own property
  }
}
//To avoid that, create an object with 'null'. This removes any prototypes from the object
var emptyObject = Object.create(null);
//console.log("toString" in emptyObject); //  → false

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
// JSON.stringify(x) convert to JSON
// JSON.parse(x) convert to JS value
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
//console.log(users[0]);    //prints the object
//console.log(users[0].name); //John Doe


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
        var counter1=0, counter2=0;
        for(var prop in value1)
            counter1++;
        for(var prop in value2)
            counter2++;

        if(counter1 == counter2){
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
/** High-order functions
 * Functions that operate on other functions, either by taking them as arguments or by returning them
 */
function greaterThan(n){
    //var testerFunction = greaterThan(5);
    //closure example, with above definition out of function, value will be compared to 5
    //  return f.apply(null, arguments);
    //  using apply sends all supplied arguments in the call, where as the below and takes the first and ignores all else
    return function(value){
        return value > n;
    }
}; //Closure
function noisy(f) {
    //Closure with functional changes, caution - this doesn't work in all browers.
    //noisy(Boolean)(0);
    // → calling with 0
    // → called with 0 - got false
    return function (arg) {
        console.log("calling with: ", arg);
        var val = f(arg);
        console.log("Called with: ", arg, " - got ", val);
        return val;
    };
}; //Closure with function changes
/**
 * control flow
 */
function unless(test, then) {
    if (!test) then();
}
function repeat(times, body) {
    for (var i = 0; i < times; i++) body(i);
}
repeat(3, function(n) {
    unless(n % 2, function() {
        //console.log(n, "is even");
    });
});
// → 0 is even
// → 2 is even

// Flattenarray example:
var flattenArray = [[1, 2, 3], [4, 5], [6]];
flattenArray = (flattenArray.reduce(
  function(accumulator, arrayContent) {       // callback function, accumulator is being added on, arrayContent is current inner array
    return accumulator.concat(arrayContent);  // adds arrayContent to accumulator
}, []                                         // intialValue sets accumulator to type array, else concat isn't available
));

//brainfart ???
var categoryTestData = [
  { id: 'animals', 'parent': null },
  { id: 'mammals', 'parent': 'animals' },
  { id: 'cats', 'parent': 'mammals' },
  { id: 'dogs', 'parent': 'mammals' },
  { id: 'persian', 'parent': 'cats' },
  { id: 'siamese', 'parent': 'cats' },
  { id: 'chiahuahua', 'parent': 'dogs' },
  { id: 'labrador', 'parent': 'dogs'}
];

function makeTree(categories, parent){
  var node = {}; //node is part of a tree
  categories
    .filter(function(c){
      return c.parent === parent;
    })
    .forEach(function(c){
      node[c.id] = makeTree(categories, c.id);

    });
  return node;
}

/*    Prints the tree as per categoryTestData definition
console.log(
  JSON.stringify(
    makeTree(categoryTestData, null)
    , null, 2)
);
*/
// ------------------   Image-loader in-file
function loadImage(url){
  return new Promise((resolve, reject) => {
    let image = new Image();

    image.onload = function(){
      resolve(image);
    }

    image.onerror = function(){
      let = message =
        "Could not load image at " + url;
      reject(new Error(msg));
    }

    image.src = url;
  })
}

let addImg = (src) => {
  let imgElement = document.createElement("img")
  imgElement.src = src
  document.body.appendChild(imgElement)
}


//Christmas-tree a'la node
loadImage('images/cat1.jpeg').then((img1) => {
  addImg(img1.src)
  loadImage('images/cat2.jpeg').then((img2) => {
    addImg(img2.src)
    loadImage('images/cat3.jpeg').then((img3) => {
      addImg(img3.src)
    }).catch(function(error){
      //Hanndle single error
    })
  }).catch(function(error){
    //Hanndle single error
  })
}).catch(function(error){
  //Hanndle single error
})

//same as above but more readable, creates array of promises
// ES6!!
Promise.all([
  loadImage('images/cat4.jpeg'),
  loadImage('images/cat5.jpeg'),
  loadImage('images/cat6.jpeg')
]).then((images) => {
  images.forEach(img => addImg(img.src)
  )
}).catch((err) => {
  //Handle error, if any fails all fail since they are in the same promise
})


/* --------------------- Streams
  Array     - a series of multiple objects that are already there
   &
  Promise   - a notion of a single object that might arrives eventually
  having a baby (stream) = flow of values that arrive when they feels like it
  streams are functors!

  Often use to read through a lot of data, which else would cause out of memory

  Stateless applications, i.e. clients using streams such as keyboard or mouse inputs.
  Handling state often results in bugs
  baconJS is a popular library
*/
var stupidNumberStream = {
  each: (callback) => {
    setTimeout(() => callback(1), 1000)
    setTimeout(() => callback(2), 2000)
    setTimeout(() => callback(3), 3000)
  }
}
stupidNumberStream.each(console.log);



/* --------------------- Monad
    a more powerful functor that also implements flatmap
    flatmap = flatten streams to return values contained in streams
      map only passes on the streams

    Promises are monads, flatmap is actually called .then

*/


/* ------------------- Chapter 6

*/
// A vector type
function Vector(x, y){
  this.x = x;
  this.y = y;
}
Vector.prototype = {
  plus : function(vector){
  	return new Vector((this.x + vector.x), (this.y + vector.y));
  },
  minus : function(vector){
  	return new Vector((this.x - vector.x), (this.y - vector.y));
  },
  get length() {
  	return Math.sqrt(this.x * this.x + this.y * this.y)
  }
}
//console.log(new Vector(1, 2).plus(new Vector(2, 3)));   // → Vector{x: 3, y: 5}
//console.log(new Vector(1, 2).minus(new Vector(2, 3)));  // → Vector{x: -1, y: -1}
//console.log(new Vector(3, 4).length);                   // → 5

// Another cell
function StretchCell(inner, width, height){
  this.inner = inner; //TextCell
  this.width = width;
  this.height = height;
}

//This time seperatly defined
StretchCell.prototype.minWidth = function() {
  return Math.max(this.inner.minWidth(), this.width);
};
StretchCell.prototype.minHeight = function() {
  return Math.max(this.inner.minHeight(), this.height);
};
StretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height);
};

//var sc = new StretchCell(new TextCell("abc"), 1, 2);  //TextCell undefined in this JS file
//console.log(sc.minWidth());   // → 3
//console.log(sc.minHeight());  // → 2
//console.log(sc.draw(3, 2));   // → ["abc", "   "]

// Sequence interface

function logFive(sequence) {
  for(var i=0; i<5; i++){
    if(!sequence.next())
      break;
    console.log(sequence.current());
  }
}

function ArraySeq(array) {
  this.array = array;
  this.pos = -1;
}
ArraySeq.prototype = {
  next : function () {
    if(this.pos >= this.array.length -1)
      return false;
    this.pos++;
    return true;
  },
  current : function() {
    return this.array[this.pos];
  }
};

function RangeSeq(from, to) {
  this.pos = from - 1;
  this.to = to;
}
RangeSeq.prototype = {
  next : function() {
    if(this.pos >= this.to){
      return false;
    }
    this.pos++;
    return true;
  },
  current : function() {
    return this.pos;
  }
}


logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
