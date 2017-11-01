// allinone.ts
interface StringValidator {
    isAcceptable(s: string): boolean;
}

let lettersRegExp = /^[A-Za-z]+$/;
let numberRegExp = /^[0-9]+$/;

class LetterOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
        return lettersRegExp.test(s);
    }
}

class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegExp.test(s);
    }
}

let strings = ['Hello', "98052", "101"];

let validators: {
    [s: string]: StringValidator;
} = {};

validators["ZIP code"] = new ZipCodeValidator();
validators["Letters only"] = new LetterOnlyValidator();

for (let s of strings) {
    for (let name in validators) {
        let isMatch = validators[name].isAcceptable(s);
        console.log(`'${ s }' ${ isMatch ? "matches" : "does not match" } '${ name }'.`);
    }
}