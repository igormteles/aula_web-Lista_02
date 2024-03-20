//exc 1
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

console.log("\nExercicio 1")
console.log(maiorNum([1,2,20,5,13,17,22,8,19,16]))


//exc 2
function evenOdd(int: number){

    if(int % 2 == 0){
        return true
    }else{
        return false
    }
}

console.log("\nExercicio 2")

if(evenOdd(5))
    console.log("O numero e par")
else
    console.log("O numero e impar")


//exc 3
function ResultadoMedia(array: number[]){
    let i: number
    let media: number
    let soma: number
    soma = 0

    for(i=0; i<array.length; i++){
        soma += array[i];
    }

    media = soma/array.length;
    return media;
}

console.log("\nExercicio 3")
console.log("A media 1 eh: ", ResultadoMedia([1, 5, 7, 9, 10]))
console.log("A media 2 eh: ", ResultadoMedia([15,52,73,90,10]))
console.log("A media 3 eh: ", ResultadoMedia([12,14,70,8,3]))


//exc 4
function Maiuscula(letra: string){
    return letra.toUpperCase()
}

console.log("\nExercicio 4")
console.log(Maiuscula("Programacao para web"))
console.log(Maiuscula("FIFA e vida!"))
console.log(Maiuscula("xero de pneu quemado"))


//exc 5
function NumeroPrimo(num: number){
    let i: number

    for(i=2; i<num; i++){
        if(num % i == 0){
            return false
        }
    }
    return true
}

console.log("\nExercicio 5")
console.log(NumeroPrimo(10))
console.log(NumeroPrimo(3))


//exc 6
function InvertOrder(array: number[]){
    return array.reverse()
}

console.log("\nExercicio 6")
console.log(InvertOrder([10, 9, 8, 7, 6]))
console.log(InvertOrder([1,2,3,4,5]))
console.log(InvertOrder([12,24,48,96]))


//exc 7
function Aumento(salario: number, porcentual: number){
    let aumento: number
    let novo_salario: number

    aumento = salario * porcentual
    novo_salario = salario + aumento
    
    return novo_salario
}

console.log("\nExercicio 7")
console.log(Aumento(1000, 0.33))


//Exc 8
function ReverseString(str: string): string{
    let array: string[] = str.split("")
    let reverte_junta: string = array.reverse().join("")

    return reverte_junta
}

console.log("\nExercicio 8")
console.log(ReverseString("Roberto"))
console.log(ReverseString("Igor"))


//exc 9
function SumPair(int: number[]): number{
    let sum: number = 0
    let i: number
    
    for(i=0;i<int.length;i++){
        if(int[i] % 2 == 0){
            sum += int[i]
        }
    }
    
    return sum
}

console.log("\nExercicio 9")
console.log(SumPair([10, 15, 2, 4, 6, 13]))


//exc 10
function Factorial(num:number): number {
    if(num == 0) return 1
    else return num * Factorial(num - 1)
}

console.log("\nExercicio 10")
console.log(Factorial(5))
console.log(Factorial(7))
console.log(Factorial(10))


