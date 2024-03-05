class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    calcArea(){
        return this.width * this.height;
    }
}

const rect1 = new Rectangle(5,10)
const rect2 = new Rectangle(3,8)
const rect3 = new Rectangle(4,12)
const rectangles = [rect1,rect2,rect3]



const smallestRectangle = findSmallestRectangle (rectangles);
console.log("Smallest Rectangle: ", smallestRectangle)
