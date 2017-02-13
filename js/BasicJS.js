/**
 * Created by Christian on 2017-02-05.
 */


// **************** Basic functions ***************************************************************
var myNumber = '5'; //Basic variable
var myArray = ['red', 'blue', 'green'];   //Basic array

myArray.push('purple');
console.log(myNumber);
console.log(myArray.reverse());


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
