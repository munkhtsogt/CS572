function add(a, b){
    return setTimeout((a, b) => console.log(a + b), 1000);
}
console.log("start");
console.log(add(1, 2));
console.log(add(3, 4));
console.log("end");