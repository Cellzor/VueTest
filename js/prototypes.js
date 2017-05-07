
/*    Object notion
*/
function talk(){
  console.log(this)
  console.log(this.sound)
}

talk(); // -> undefined, global object

let animal = {
  talk //talk: talk shorthand version
}
let cat = {
  sound: 'Meow!'
}
let persianCat = {
  howl: function(){
    console.log(this.sound.toUpperCase())
  }
}

Object.setPrototypeOf(cat, animal);
animal.talk();  // -> undefined
cat.talk();     // -> Meow!
Object.setPrototypeOf(persianCat, cat);
persianCat.howl();

//add test function to the prototype
animal.test = function(){
  console.log("YES!");
}
persianCat.test();  // -> YES!


/*    Function notion
*/
//Constructor
function Person(saying){
  this.saying = saying
}

Person.prototype.talk = function(){
  console.log("I say:", this.saying)
}

var crockford = new Person("SEMICOLOANS!! 1one1")
crockford.talk()



/* new expplaination
  Spawn equals a basic implementation of 'new'
*/

function spawn(constructor){
  var argsArray = Array.from(arguments);  //ES6
  var argsArray = Array.prototype.slice.apply(arguments); // <ES6
  console.log(argsArray)

  //Step 1. create a new object
  var obj = {}
  //Step 2. Set the prototype of that Object to that of the supplied constructor
  Object.setPrototypeOf(obj, constructor.prototype)
  //Step 3. Executes the contstructor with this set the context of the created object
  //apply() is as bind but executes the function immediately and returns its value
  constructor.apply(obj, argsArray.slice(1))
  //Step 4. Return the created object, if the constructor returns an object in itself the below will return that correctly
  return constructor.apply(obj, argsArray.slice(1)) || obj;
}
var crockford2 = spawn(Person, 'SEMICOLOANS!! 1one1')
crockford2.talk();
