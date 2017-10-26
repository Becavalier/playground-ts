let sym1 = Symbol();
let sym2 = Symbol("key");
let sym3 = Symbol("key");

sym2 === sym3; // false
sym2 == sym3; // false

let obj = {
    [sym]: "value"
};

console.log(obj[sym]); // "value"

// for class
const getClassNameSymbol = Symbol();
class C {
    [getClassNameSymbol]() {
        return "C";
    }
}

let c = new C();
let className = c[getClassNameSymbol](); // "C"

// known symbols

// Symbol.hasInstance
class MyArray {
    static [Symbol.hasInstance](instance) {
        return Array.isArray(instance);
    }
}

// Symbol.isConcatSpreadable
// !!! array like object will not be spreadable in default !!!
var alpha = ['a', 'b', 'c'],
    numeric = [1, 2, 3];
numeric[Symbol.isConcatSpreadable] = false;
var alphaNumeric = alpha.concat(numeric);
console.log(alphaNumeric); // ['a', 'b', 'c', [1, 2, 3] ]


// Symbol.iterator
var myIterable = {};
myIterable[Symbol.iterator] = function *() {
    yield 1;
    yield 2;
    yield 3;
};
[...myIterable] // [1, 2, 3]


// Symbol.match
var re = /foo/
// set not use regexp, instead string
re[Symbol.match] = false;
"/foo/".startsWith(re); // true
"/baz/".endsWith(re); // false


// Symbol.replace
// Symbol.search


// Symbol.species
class MyArray extends Array {
    static get [Symbol.species]() {
        return Array;
    }
};
var a = new MyArray(1, 2, 3);
var mapped = a.map(x => x * x);
console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array);


// Symbol.split
var exp = {
    pat: 'in',
    [Symbol.split](str) {
        return str.split(this.pat);
    }
}
"dayinlove".split(exp); // ["day", "love"]

// Symbol.toPrimitive
var obj1 = {};
console.log(+obj1); // NaN
console.log(`${obj1}`); // "[object Object]"
console.log(obj1 + ""); // "[object Object]"
// hint: "number", "string", "default"
var obj2 = {
    [Symbol.toPrimitive](hint) {
        if (hint == "number") {
            return 10;
        }
        if (hint == "string") {
            return "hello";
        }
        return true;
    }
};
console.log(+obj2);
console.log(`${obj2}`);
console.log(obj + "");



// Symbol.toStringTag
class ValidatorClass {}
Object.prototype.toString.call(new ValidatorClass()); // "[object Object]"

class ValidatorClass {
    get [Symbol.toStringTag] () {
        return "Validator";
    }
}

Object.prototype.toString().call(new ValidatorClass()); // "[object Validator]"


// Symbol.unscopables
var obj = {
    foo: 1,
    bar: 2
};
// !!! set accessable scope here !!!
obj[Symbol.unscopables] = {
    foo: false,
    bar: true
}
with (obj) {
    console.log(foo); // 1
    console.log(bar); // ReferenceError: bar is not defined
}