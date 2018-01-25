class A{
    constructor(){
        console.log('A is called');
    }
    getA(a = 0){
        return a;
    }
}

new A();