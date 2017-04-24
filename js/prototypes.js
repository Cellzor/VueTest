
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
