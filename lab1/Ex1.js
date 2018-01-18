function Musician(name){
    this.name = name;
}

let Violinist = new Musician("Asaad");
let Pianist = new Musician("Munkhtsogt");

Musician.prototype.play = function(piece){
    console.log(this.name + " is now playing " + piece);
}

Violinist.play("Moon Sonate");
Pianist.play("La La Land");
