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
        n= Number(number2.toString().slice(-2));
        ceros+=Math.floor(number2/100);
        
    } else { //50
        let number=Number(x.slice(1)); //50
        let number3=Number(number.toString().slice(-2)); //50
        let number2=0; 
        ceros+=Math.floor(number/100); //0

        if(number3>=n){
            
            number2=100-(number3-n)

            if(n!==0){
            ceros++}


        } else{
            number2=n-number3
            }

        n=number2;

    }
})

console.log(ceros);