"use strict";
class Car {
    constructor(nome, marca, placa, ano) {
        this.nome = nome;
        this.marca = marca;
        this.placa = placa;
        this.ano = ano;
    }
    get getNome() {
        return this.nome;
    }
    set setNome(nome) {
        this.nome = nome;
    }
    get getMarca() {
        return this.marca;
    }
    set setMarca(marca) {
        this.marca = marca;
    }
    get getPlaca() {
        return this.placa;
    }
    set setPlaca(placa) {
        this.placa = placa;
    }
    get getAno() {
        return this.ano;
    }
    set setAno(ano) {
        this.ano = ano;
    }
}
console.log("\n Exc1");
const carroVetor = new Car("civic", "honda", "BRT9L45", 2024);
carroVetor.setAno = 2023;
console.log(carroVetor);
let carro = new Car("Cruze", "chevrolet", "SHS6B98", 2021);
console.log(carro);
//exc 2
class Calc {
    constructor(valor1, valor2) {
        this.valor1 = valor1;
        this.valor2 = valor2;
    }
    get getValor1() {
        return this.valor1;
    }
    set setValor1(valor1) {
        this.valor1 = valor1;
    }
    get getValor2() {
        return this.valor1;
    }
    set setValor2(valor2) {
        this.valor2 = valor2;
    }
    sum() {
        let soma = this.valor1 + this.valor2;
        return soma;
    }
    subs() {
        let soma = this.valor1 - this.valor2;
        return soma;
    }
    div() {
        let soma = this.valor1 / this.valor2;
        return soma;
    }
    mult() {
        let soma = this.valor1 * this.valor2;
        return soma;
    }
    porc() {
        let soma = (this.valor1 * this.valor2) / 100;
        return soma;
    }
}
let op = '+';
let calc = new Calc(10, 2);
console.log("\n Exc2");
switch (op) {
    case '+':
        console.log(calc.sum());
        break;
    case '-':
        console.log(calc.subs());
        break;
    case '/':
        console.log(calc.div());
        break;
    case '*':
        console.log(calc.mult());
        break;
    case '%':
        console.log(calc.porc());
        break;
}
//exc 3
class Produto {
    constructor(nome, preco, quantidadeEmEstoque) {
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }
    get getNome() {
        return this.nome;
    }
    set setNome(nome) {
        this.nome = nome;
    }
    get getPreco() {
        return this.preco;
    }
    set setPreco(preco) {
        this.preco = preco;
    }
    get getQuantidadeEmEstoque() {
        return this.quantidadeEmEstoque;
    }
    set setQuantidadeEmEstoque(quantidadeEmEstoque) {
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }
    calcularValorTotalEmEstoque() {
        let vt = this.preco * this.quantidadeEmEstoque;
        return vt;
    }
    reporEstoque(quantidade) {
        this.quantidadeEmEstoque = this.quantidadeEmEstoque + quantidade;
        return this.quantidadeEmEstoque;
    }
    vender(quantidade) {
        this.quantidadeEmEstoque = this.quantidadeEmEstoque - quantidade;
        return this.quantidadeEmEstoque;
    }
}
let produto = new Produto("Caçarola", 32, 10);
console.log("\n Exc 3");
console.log(produto.calcularValorTotalEmEstoque());
console.log(produto.reporEstoque(4));
console.log(produto.vender(9));
console.log(produto.calcularValorTotalEmEstoque());
