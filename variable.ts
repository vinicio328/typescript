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

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2,3];
let f: any[] = [1, true, 'e', false];

