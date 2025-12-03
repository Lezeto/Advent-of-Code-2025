import {readFileSync} from "node:fs";

const texto= readFileSync("/Users/nicol/Documents/estudiandin/Advent of Code 2025/day1.txt", "utf8", (err, data) => {
    if (err){return console.error("error reading the file", err);}
})

let lista=[];
lista = texto.split("\n");
let largo=lista.length;
let ceros=0;
let n=50;

lista.forEach(x=>{
    if(x[0]==="R"){
        let number= Number(x.slice(1));
        let number2= n+number;
        let number3= Number(number2.toString().slice(-2));
        n=number3;
        if(n===0){ceros++}
    } else {
        let number=Number(x.slice(1));
        let number3=Number(number.toString().slice(-2));
        let number2=0;

        if(number3>n){
            number2=100-(number3-n);
        } else{number2=n-number3}

        n=number2;
        if(n===0){ceros++}
    }
})
console.log(ceros);