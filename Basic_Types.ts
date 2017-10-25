// boolean
let isDone: boolean = false;

// number
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

// string
let name: string = "bob";
let name: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${name}`;

// array
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];

// tuple
let x:[string, number];
x = ['hello', 10];
console.log(x[0])

// enum
enum Color {
    Red,
    Green,
    Blue
}
let c: Color = Color.Blue;
enum Color {
    Red = 1,
    Green = 2,
    Blue
}

// any
let notSure: any = 4;
let notSure: any = 4;

// void
function warnUser(): void {
    alert('This is a warning message!');
}
let unusable: void = undefined;
let unusable: void = null;

// undefined / null
let u: undefined = undefined;
let n: null = null;

// never
function infiniteLoop (): never {
    while (true) {}
}

// type assert
let someValue: any = "this is a string";
let strLength: number = (<string> someValue).length;
let strLength: number = (someValue as string).length;
