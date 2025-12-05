import {readFileSync} from "node:fs";

const texto= readFileSync("/Users/nicol/Documents/estudiandin/Advent of Code 2025/day4.txt", "utf8", (err, data) => {
    if (err){return console.error("error reading the file", err);}
})

let lista = texto.split("\n");
lista= lista.map(x=> x.trim());
let largo = lista[0].length;
let cantidadFilas = lista.length;
let suma=0;
for (let fila=0; fila<cantidadFilas; fila++){
    for (let i=0; i<largo; i++){

        if (lista[fila][i]==="@"){
            
        let rolls=0;
        if (lista[fila-1]?.[i-1]==="@"){rolls++}
        if (lista[fila-1]?.[i]==="@"){rolls++}
        if (lista[fila-1]?.[i+1]==="@"){rolls++}
        if (lista[fila]?.[i-1]==="@"){rolls++}
        if (lista[fila]?.[i+1]==="@"){rolls++}
        if (lista[fila+1]?.[i-1]==="@"){rolls++}
        if (lista[fila+1]?.[i]==="@"){rolls++}
        if (lista[fila+1]?.[i+1]==="@"){rolls++}
        if (rolls<4){suma++}
        }

    }
}

console.log(suma)