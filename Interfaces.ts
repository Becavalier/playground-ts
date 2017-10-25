function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

// interface
interface LabelledValue {
    label: string;
}
function  printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

// optional properties
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({color: "black"});

// readonly properties
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1:Point = {
    x: 10,
    y: 20
}
let a: number[] = [1, 2, 3, 4];
let ro:  ReadonlyArray<number> = a;
ro[0] = 12; // error!
a = ro; // error!
a = ro as number[]; // success!

// Variables use const whereas properties use readonly.


