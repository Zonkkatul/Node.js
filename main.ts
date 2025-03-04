import { reverseString, countCharacters, toTitleCase } from './stringUtils';
import * as fs from 'fs';
import * as path from 'path';



const sentence = "Learning Node.js is important because you can write efficient server-side applications.";


const reversedSentence = reverseString(sentence);
fs.writeFileSync('reversed.txt', reversedSentence);



console.log("Original Sentence: ", sentence);
console.log("Reversed Sentence: ", reversedSentence);



fs.writeFileSync('reversed.txt', 'Hello, world!');

const filePath = path.join(__dirname, 'reversed.txt');
console.log('File path:', filePath);
