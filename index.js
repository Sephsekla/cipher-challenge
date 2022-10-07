"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const ciphertext = (0, fs_1.readFileSync)('./ciphertext.txt', 'utf-8');
console.log(ciphertext);
