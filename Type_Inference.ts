let x = 3;

let y = [0, 1, null];

console.log(y);


// context type
window.onmousedown = function (mouseEvent: any) {
    console.log(mouseEvent.button);
}

function createZoo(): Animal[] {
    return [new Rhine(), new Elephant(), new Snake()];
}