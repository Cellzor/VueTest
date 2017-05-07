/*  Primitive Values
Stored on the stack, very fast but limnited memory

string
number
Boolean
undefined
null
Symbol
*/

var name = 'Max';
var age = 28;
var hobbies = undefined;



/*  Reference values
Stored on the Heap, slower but a lot bigger

Objects
Remember objects can be arrays, functions
*/

//Stack stores a pointer to the data on the Heap
var person = {
  age: 28,
  name: 'Max',
  hobbies: ['Sports', 'Cooking']
};
console.log(person);

//This creates a new pointer on the stack, pointing to the same object as person
var secondPerson = person;
console.log(secondPerson);

//assign() takes 2 args, first holds the base, 2nd holds the data you want to copy on top
//Basically merges 2 objects into the first one
var thirdPerson = Object.assign({}, person);
console.log(thirdPerson);

//However this doesn't create a deep clone, meaning it doesn't create new objects of the properties
//Since Hobbies is an array, which is a reference type, it does only create a pointer for that
person.hobbies.push('Reading');
console.log(thirdPerson);
