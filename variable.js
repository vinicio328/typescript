function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}
function doSomething2() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    //console.log('Finally: ' + i);
}
doSomething();
doSomething2();
// primitive types
let a;
let b;
let c;
let d;
let e = [1, 2, 3];
let f = [1, true, 'e', false];
// old js, whithout enums
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;
// enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
let backgroundColor = Color.Blue;
let message = 'abc';
let check = message.endsWith('c');
// type assertions
let message2;
message2 = 'abc';
let check2 = message2.endsWith('c');
let alternateAssertCheck = message2.endsWith('c');
