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

let message = 'abc';
let check = message.endsWith('c');

// type assertions
let message2;
message2 = 'abc';
let check2 = (<string>message2).endsWith('c');
let alternateAssertCheck = (message2 as string).endsWith('c');





