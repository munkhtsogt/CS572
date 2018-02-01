@logged
class Person {
    constructor(){
        console.log('Hi');
    }
}

function logged(FunctionConstructor: Function){
    console.log(FunctionConstructor);
}