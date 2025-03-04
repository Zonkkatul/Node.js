"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseString = reverseString;
exports.countCharacters = countCharacters;
exports.toTitleCase = toTitleCase;
function reverseString(str) {
    return str.split('').reverse().join('');
}
function countCharacters(str) {
    return str.replace(/\s/g, '').length;
}
function toTitleCase(str) {
    return str
        .split(' ')
        .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); })
        .join(' ');
}
