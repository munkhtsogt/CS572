class BaseObject{
    width: number = 0;
    height: number = 0;
}

class Rectangle extends BaseObject {
    calcSize(){
        return this.width * this.height;
    }
}

let rectangle = new Rectangle();
rectangle.width = 5;
rectangle.height = 2;
console.log(rectangle.calcSize());
