import {readFileSync} from "node:fs";

const textoRangos= readFileSync("/Users/nicol/Documents/estudiandin/Advent of Code 2025/day5.txt", "utf8", (err, data) => {
    if (err){return console.error("error reading the file", err);}
})

const textoIds= readFileSync("/Users/nicol/Documents/estudiandin/Advent of Code 2025/day5-2.txt", "utf8", (err, data) => {
    if (err){return console.error("error reading the file", err);}
})

let listaRangos = textoRangos.split("\n");
let listaIds = textoIds.split("\n");
let cantidadRangos= listaRangos.length;
let suma=0;

listaIds.forEach(id=> {
    for (let i=0; i<cantidadRangos; i++){
        let rango=listaRangos[i];
        let rangoEnLista=rango.split("-");
        let inicio=Number(rangoEnLista[0]);
        let fin=Number(rangoEnLista[1]);
        let idNumber= Number(id);
        if (idNumber>=inicio && idNumber<=fin){
            suma++
            break
        }
    }
})
console.log(suma);
