import {readFileSync} from "node:fs";

const texto= readFileSync("/Users/nicol/Documents/estudiandin/Advent of Code 2025/day3.txt", "utf8", (err, data) => {
    if (err){return console.error("error reading the file", err);}
})

let lista=[];
lista = texto.split("\n");
lista= lista.map(x=> x.trim());
let largo=lista[0].length;
let suma=0;

lista.forEach(bank =>{
    let primerDigito=0;
    let segundoDigito=0;
    let posicionPrimerDigito=0;

    
    for(let i=0; i<largo-1; i++){
        if (Number(bank[i])>primerDigito){
            primerDigito=Number(bank[i]);
            posicionPrimerDigito=i;
        }
    }

    for (let i=posicionPrimerDigito+1; i<largo; i++){
        if (Number(bank[i])>segundoDigito){segundoDigito=Number(bank[i])}
    }

    let largestJoltage=Number(String(primerDigito)+String(segundoDigito));
    suma+=largestJoltage;
})
console.log(suma);

console.log(largo)
console.log(lista[0][largo-1])