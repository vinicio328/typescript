interface IPoint {
    x: number;
    y: number;
    draw: () => void;    
}

class Point implements IPoint 
{
    x: number;
    y: number;
    
    draw() 
    {
        console.log('X:' + this.x + ', Y:' + this.y);
    }

    getDistance: (another: Point) =>
    {

    }

}



let aPoint: Point = new Point();
aPoint.draw();


