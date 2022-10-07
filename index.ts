import { readFileSync } from "fs";
import prompt from "prompt";


const ciphertext : string = readFileSync('./ciphertext.txt', 'utf-8');

console.log(ciphertext);