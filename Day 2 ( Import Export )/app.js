// named export are imported within {} with same name
import {add , subtract } from './script.js'
console.log(add)
console.log(subtract)


// default export can be imported with any other name 
import kar from './script.js';
console.log(kar)