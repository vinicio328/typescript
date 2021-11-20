function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}
function doSomething2() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    //console.log('Finally: ' + i);
}
doSomething();
doSomething2();
// primitive types
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'e', false];
// old js, whithout enums
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
// enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Blue;
