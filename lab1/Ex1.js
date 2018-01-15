function Musician(name){
    this.name = name;
}

var Violinist = new Musician("Asaad");
let Pianist = new Musician("Munkhtsogt");

Musician.prototype.play = function(piece){
    console.log(this.name + " is now playing " + piece);
}

Violinist.play("Moon sonate");
Pianist.play("La la land");