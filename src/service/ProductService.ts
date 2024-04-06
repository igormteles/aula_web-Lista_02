import { Product } from "../model/Product";
import { ProductRepository } from "../repository/ProductRepository";
export class ProductService{

    productRepository: ProductRepository = new ProductRepository();

    cadastrarProduto(produtoData: any): Product {
        const { name, description, price } = produtoData;
        if(!name || !description || !price ){
            throw new Error("Informações incompletas");
        }
        const novoProduto = new Product(name, description, price);
        this.productRepository.insereProduto(novoProduto);
        return novoProduto;
    }

    consultarProduto(id: any, name: any): Product|undefined{
        const idNumber: number = parseInt(id, 10);
        const nameString: string = name;
        console.log(name)
        console.log(id)
        return this.productRepository.filtraProdutoPorId(idNumber, nameString);
    }

    getProducts():Product[]{
        return this.productRepository.filtraTodosProdutos();
    }
}