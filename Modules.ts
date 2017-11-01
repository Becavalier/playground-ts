// Validation.ts
export interface StringValidator {
    isAcceptable(s: String): boolean;
}


// ZipCodeValidator.ts
export const numberRegEXp = /^[0-9]+$/;

export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: String) {
        return s.length === 5 && numberRegEXp.test(s);
    }
}

// ParseIntBasedZipCodeValidator.ts
export class ParseIntBasedZipCodeValidator {
    isAcceptable(s: String) {
        return s.length === 5 && parseInt(s).toString() === s;
    }
}

export {ZipCodeValidator as RegExpBasedZipCodeValidator} from "./ZipCodeValidator";


// AllValidators.ts
export * from "./StringValidator";
export * from "./LettersOnlyValidator";
export * from "./ZipCodeValidator";



//
import { ZipCodeValidator } from "./ZipCodeValidator";
let myValidator = new ZipCodeValidator();

import { ZipCodeValidator as ZCV } from "./ZipCodeValidator";
let myValidator = new ZCV();

import * as validator from  "./ZipCodeValidator"
let myValidator = new validator.ZipCodeValidator();

// side effect
import "./my-module.js";

// jQuery.d.ts
declare let $: jQuery;
export default $

// App.ts
import $ from "jQuery"

// ZipCodeValidator.ts
export default class ZipCodeValidator {
    static numberRegExp = /^[1-9]+$/;
    isAcceptable(s: String) {
        return s.length === 5 && ZipCodeValidator.numberRegExp.test(s);
    }
}

// Test.ts
import validator from "./ZipCodeValidator";
let myValidator = new validator();


// StaticZipCodeValidator.ts
const numberRegExp = /^[0-9]+$/
export default function (s: String) {
    return s.length === 5 && numberRegExp.test(s);
}

// Test.ts
import validator from "./StaticZipCodeValidator";
let strings = ["Hello", "98052", "101"];
strings.forEach(s => {
    console.log(`"${s}" ${validate(s) ? " matches" : " does not match"}`);
})

// OneTwoThree.ts
export default "123";

// Log.ts
import num from "./OneTwoThree.ts"
console.log(num);











// "export =" and "import = require()"
// ZipCodeValidatior.ts
let numberRegExp = /^[0-9]+$/
class ZipCodeValidator {
    isAcceptable(s: String) {
        return s.length === 5 && numberRegExp.test(s);
    }
}
export = ZipCodeValidator;

// Test.ts
import zip = require("./ZipCodeValidator");
let strings = ["Hello", "98052", "101"];
let validator = new zip();
strings.forEach(s => {
    console.log(`"${ s }" - ${ validator.isAcceptable(s) ? "matches" : "does not match" }`);
});


// dynamic module loading (nodejs)
declare function require(module: string): any
import { ZipCodeValidator as Zip } from "./ZipCodeValidator";
if (needZipValidation) {
    let ZipCodeValidator: typeof Zip = require("./ZipCodeValidator");
    let validator = new ZipCodeValidator();
    if (validator.isAcceptable("...")) {}
}

// node.d.ts
declare module "url" {
    export interface Url {
        protocol?: string;
        hostname?: string;
        pathname?: string;
    }

    export function parse(urlStr: string, parseQueryString?, slashesDenoteHost?): Url;
}

declare module "path" {
    export function normalize(p: string): string;
    export function join(...paths: any[]): string;
    export let sep: string;
}

// simplified ("any" default)
declare module "hot-new-module";

// import non-javascript stuff
//.d.ts
declare module "*!text" {
    const content: string;
    export default content;
}

declare module "json!*" {
    const value: any;
    export default value;
}
//.ts
import fileContent from "./xyz.txt!text";
import data from "json!http://example.com/data.json";
console.log(data, fileContent);



// namespace
// MyLargeModule.ts
export class Dog {}
export class Cat {}

// Consumer.ts
import * as myLargeModule from "./MyLargeModule.ts";
let x = new myLargeModule.Dog();


//