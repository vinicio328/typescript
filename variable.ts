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
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2,3];
let f: any[] = [1, true, 'e', false];

// old js, whithout enums
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

// enums
enum Color 
{
    Red, Green, Blue
};

let backgroundColor = Color.Blue;




