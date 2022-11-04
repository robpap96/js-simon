"use strict";
const numbers = [];
function creaRndNum(str, range){
    for(let i=0; i<5; i++) {
        let num = parseInt(Math.random()*range + 1);
        if(str.includes(num)){
           num = Math.round(Math.random()*range + 1); 
           i--;
           continue;
        }
        str.push(num);
    }
}
creaRndNum(numbers, 100);
console.log(numbers);

const divNum = document.querySelector("main");
divNum.document.createElement()