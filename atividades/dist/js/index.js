"use strict";
/*
function maiorNum(lista: number[]){
 let i: number
 let maior=0

 for(i=0; i<=10; i++){
    if (lista[i]>maior){
        maior = lista [i];
    }
 }

 return maior;
}

console.log(maiorNum([1,2,20,5,13,17,22,8,19,16])
)
*/
/*
function evenOdd(int: number){

    if(int % 2 == 0){
        return true
    }else{
        return false
    }
}

if(evenOdd(5))
    console.log("O numero e par")
else
    console.log("O numero e impar")
*/
function ResultadoMedia(array) {
    let i;
    let media;
    let soma;
    soma = 0;
    for (i = 0; i < array.length; i++) {
        soma = array[i];
    }
    media = soma / array.length;
    return media;
}
console.log("A media 1 eh: ", ResultadoMedia([1, 5, 7, 9, 10]));
console.log("A media 2 eh: ", ResultadoMedia([15, 52, 73, 90, 10]));
console.log("A media 3 eh: ", ResultadoMedia([12, 14, 70, 8, 3]));
