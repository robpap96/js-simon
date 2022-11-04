

// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

"use strict";

const numberContainer = document.querySelector(".container");

const Numbers = [];
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
    //deb
    return str;
}
const newS = creaRndNum(Numbers, 100);
const number = document.createElement("div");
number.innerHTML = newS;
numberContainer.append(number);

const guessedNumber = document.createElement("h1");
const userNum =[];
const indovinati = [];
let cnt = 0;


setTimeout(function(){
    numberContainer.classList.add("hide-item");
}, 3000);

setTimeout(function(){

    for(let i=0; i<5; i++) {
        userNum[i] = Number(prompt(`Ora inserisci i numeri uno alla volta`));
    }
    
    for(let i=0; i<5; i++){
        for(let j=0; j<5; j++){
            if(newS[i] === userNum[j]){
                cnt++;
                indovinati.push(userNum[i]);
            }
        }
    }
    numberContainer.classList.remove("hide-item");
    guessedNumber.innerHTML =`<br> Bravo!! hai indovinato ${cnt} numeri, e sono ->${indovinati}`;
    numberContainer.append(guessedNumber);
},4000);

