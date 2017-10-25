function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function (x: number, y: number): number {
    return x + y;
}

// function declearation + function body
let myAdd: (x: number,  y: number) => number =
    function (x: number, y: number):number {
        return x + y;
    }


// optional parameters
function buildName (firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
let result = buildName('Bob');

// rest parameters
function buildName (firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
let buildNameFun: (fname: string, ...rest: string[]) => string = employeeName;


