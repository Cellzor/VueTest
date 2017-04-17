// ---------- Global declartions
var plan = ["############################",
            "#      #    #      o      ##",
            "#                          #",
            "#          #####           #",
            "##         #   #    ##     #",
            "###           ##     #     #",
            "#           ###      #     #",
            "#   ####                   #",
            "#   ##       o             #",
            "# o  #         o       ### #",
            "#    #                     #",
            "############################"];

var directions = {
  "n":  new Vector( 0, -1),
  "ne": new Vector( 1, -1),
  "e":  new Vector( 1,  0),
  "se": new Vector( 1,  1),
  "s":  new Vector( 0,  1),
  "sw": new Vector(-1,  1),
  "w":  new Vector(-1,  0),
  "nw": new Vector(-1, -1)
};
var directionNames = "n ne e se e sw w nw".split(" ");

function randomElement(array) {
  return array[Math.floor(Math.random()*array.length)];
}

// ---------- Vector declartion
function Vector(x, y){
  this.y = y;
  this.x = x;
}
Vector.prototype = {
  plus : function(vector){
    return new Vector((this.x + vector.x), (this.y + vector.y));
  }
};

// ---------- Grid declartion
function Grid(width, height){
  this.space = new Array(width * height); //When calling the Array const with one number, it's created with given length
  this.width = width;
  this.height = height
}
Grid.prototype = {
  isInside : function(vector){
    return vector.x >= 0 && vector.x < this.width &&
           vector.y >= 0 && vector.y < this.height;
  },
  get : function(vector){
    return this.space[vector.x + this.width * vector.y];
  },
  set : function(vector, value){
    this.space[vector.x + this.width * vector.y] = value;
  }
};

/*  ---------- Test-data for Grid

var grid = new Grid(5, 5);
console.log(grid.get(new Vector(1, 1)));  // → undefined
grid.set(new Vector(1, 1), "X");
console.log(grid.get(new Vector(1, 1)));  // → X

*/


function BouncingCritter(){
  this.direction = randomElement(directionNames);
}
BouncingCritter.prototype = {
  act : function(view){
    if(view.look(this.direction) != " ")
      this.direction = view.find(" ") || "s";
    return {type: "move", direction: this.direction};
  }
};


function elementFromChar(legend, ch){
  if(ch == " ")
    return null;
  var element =  new legend[ch]();
  element.originChar = ch;
  return element;
};
function charFromElement(element){
  if(element == null)
    return " ";
  else
    return element.originChar;
};

function World(map, legend){
  var grid = new Grid(map[0].length, map.length);
  this.grid = grid;
  this.legend = legend;

  map.forEach(function(line, y) {
    for (var x = 0; x < line.length; x++)
      grid.set(new Vector(x, y), elementFromChar(legend, line[x]))
  });
}
World.prototype = {
  toString : function(){
    var output = "";
    for(var y = 0; y < this.grid.height; y++){
      for(var x = 0; x < this.grid.width; x++){
        var element = this.grid.get(new Vector(x, y));
        output += charFromElement(element);
      }
      output += "\n";
    }
    return output;
  }
};

function Wall(){}
var world = new World(plan, {"#": Wall,
                             "o": BouncingCritter});
console.log(world.toString());
