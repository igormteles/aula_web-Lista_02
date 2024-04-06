import { Product } from "../model/Product";

export class ProductRepository{
    productList: Product[] = [];

    insereProduto(product: Product){
        this.productList.push(product);
    }

    filtraProdutoPorId(id:number, name:string): Product|undefined{
        return this.productList.find(product => product.id === id);
        return this.productList.find(product => product.name === name)
    }

    ordenaProdutoPorPreco(price:number):Product[]|undefined{
        
        return this.productList.sort(product => product.price === price)
    }
    filtraTodosProdutos():Product[]{
        return this.productList;
    }

}