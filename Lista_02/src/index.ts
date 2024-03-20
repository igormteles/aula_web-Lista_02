class Car{
    private nome: string;
    private marca: string;
    private placa: string;
    private ano: number;


    constructor(nome:string, marca:string, placa:string, ano:number){
        this.nome = nome;
        this.marca = marca;
        this.placa = placa;
        this.ano = ano;
    }


    get getNome(): string{
        return this.nome;
    }


    set setNome(nome:string){
        this.nome = nome;
    }


    get getMarca(): string{
        return this.marca;
    }


    set setMarca(marca:string){
        this.marca = marca;
    }


    get getPlaca(): string{
        return this.placa;
    }


    set setPlaca(placa:string){
        this.placa = placa;
    }


    get getAno(): number{
        return this.ano;
    }


    set setAno(ano:number){
        this.ano = ano;
    }
}

console.log("\n Exc1")

const carroVetor = new Car("civic", "honda", "BRT9L45", 2024)
carroVetor.setAno = 2023
console.log(carroVetor)
let carro = new Car("Cruze", "chevrolet", "SHS6B98", 2021)
console.log(carro)


//exc 2

class Calc{
    private valor1: number;
    private valor2: number;

    constructor(valor1: number, valor2:number){
        this.valor1 = valor1;
        this.valor2 = valor2;
    }

    get getValor1(): number{
        return this.valor1;
    }

    set setValor1(valor1: number){
        this.valor1 = valor1;
    }

    get getValor2(): number{
        return this.valor1;
    }

    set setValor2(valor2: number){
        this.valor2 = valor2;
    }
    
    sum(): number{
        let soma = this.valor1 + this.valor2;
        return soma;
    }

    subs(): number{
        let soma = this.valor1 - this.valor2;
        return soma;
    }

    div(): number{
        let soma = this.valor1 / this.valor2;
        return soma;
    }

    mult(): number{
        let soma = this.valor1 * this.valor2;
        return soma;
    }

    porc(): number{
        let soma = (this.valor1 * this.valor2)/100;
        return soma;
    }
}

let op = '+'
let calc = new Calc(10, 2);
console.log("\n Exc2")
switch(op){
    case '+':
        console.log(calc.sum())
        break;
    case '-':
        console.log(calc.subs())
        break;
    case '/':
        console.log(calc.div())
        break;
    case '*':
        console.log(calc.mult())
        break;
    case '%':
        console.log(calc.porc())
        break;
}

//exc 3

class Produto{
    nome: string;
    preco: number;
    quantidadeEmEstoque: number;

    constructor(nome: string, preco:number, quantidadeEmEstoque: number){
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }

    get getNome(): string{
        return this.nome;
    }

    set setNome(nome: string){
        this.nome = nome;
    }

    get getPreco(): number{
        return this.preco;
    }

    set setPreco(preco: number){
        this.preco = preco;
    }

    get getQuantidadeEmEstoque(): number{
        return this.quantidadeEmEstoque;
    }

    set setQuantidadeEmEstoque(quantidadeEmEstoque: number){
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }

    calcularValorTotalEmEstoque():number{
        let vt = this.preco * this.quantidadeEmEstoque;
        return vt;
    }

    reporEstoque(quantidade: number){
        this.quantidadeEmEstoque = this.quantidadeEmEstoque + quantidade;
        return this.quantidadeEmEstoque;
    }

    vender(quantidade: number){
        if (quantidade > this.quantidadeEmEstoque)
            return 'Erro';
        else
            this.quantidadeEmEstoque = this.quantidadeEmEstoque - quantidade;
            return this.quantidadeEmEstoque;
    }
}

let produto = new Produto("Caçarola", 32, 10)
console.log("\n Exc 3")

console.log(produto.calcularValorTotalEmEstoque())
console.log(produto.reporEstoque(4))
console.log(produto.vender(9))
console.log(produto.calcularValorTotalEmEstoque())







