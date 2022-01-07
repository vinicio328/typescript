var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X:' + this.x + ', Y:' + this.y);
    };
    return Point;
}());
var aPoint = new Point();
aPoint.draw();
