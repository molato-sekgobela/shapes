class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    calcArea(){
        return this.width * this.height;
    }
}

function findSmallestRectangle(rectangles){
    let smallestRectangle = rectangles[0]; //assuming as smallest one

    for (let i = 1; i < rectangles.length; i ++){
        const currentRectangle = rectangles[i];

        if(currentRectangle.width < smallestRectangle.width || currentRectangle.height < smallestRectangle.height)
        {
            smallestRectangle = currentRectangle
        }
    }

    return smallestRectangle;
}

const rect1 = new Rectangle(5,10)
const rect2 = new Rectangle(3,8)
const rect3 = new Rectangle(4,12)
const rectangles = [rect1,rect2,rect3]



const smallestRectangle = findSmallestRectangle (rectangles);
console.log("Smallest Rectangle: ", smallestRectangle)
