//import {cowsay} from './node_modules/cowsay';


const cowsay = require("cowsay");


console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));


const i = require("yosay");

console.log(i("Johao"));