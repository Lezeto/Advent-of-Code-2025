import {readFileSync} from "node:fs";

const texto= readFileSync("/Users/nicol/Documents/estudiandin/Advent of Code 2025/day2.txt", "utf8", (err, data) => {
    if (err){return console.error("error reading the file", err);}
})

let lista=[];
lista = texto.split(",");
let suma=0;
lista.forEach(range => {
    let listaSeparada= range.split("-");
    let inicio=Number(listaSeparada[0]);
    let fin=Number(listaSeparada[1]);
    for (let i=inicio; i<=fin; i++){
        let cantidadCaracteres= String(i).length;
        if (cantidadCaracteres%2==0){
            let primeraParte=String(i).slice(0,cantidadCaracteres/2);
            let segundaParte=String(i).slice(cantidadCaracteres/2*(-1));
            if (primeraParte===segundaParte){suma+=i}
        }
    }
})
console.log(suma)