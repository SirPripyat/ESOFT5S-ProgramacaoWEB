import { ProductType } from "./types/product.types";
import ProductModel from './product.schema';
import { writeFile, readFile } from 'fs/promises'

export class ProductService {
    
    async create(product: ProductType) {
        const createdProduct = await ProductModel.create(product);

        return createdProduct;
    }

    async list() {
        const listedProducts = await ProductModel.find();

        return listedProducts;
    }

    async find(id) {
        const findedProduct = await ProductModel.findById(id);

        return findedProduct;
    }

    async update(id, dataToUpdate: ProductType) {
        const updatedProduct = await ProductModel.findOneAndUpdate({_id: id}, {
            name: dataToUpdate.name,
            quantity: dataToUpdate.quantity,
            price: dataToUpdate.price
        }, {new: true});

        return updatedProduct;
    }

    async remove(id) {
        await ProductModel.findOneAndDelete({_id : id})
    }

    async randomProducts() {
        const products = await ProductModel.find();

        const listedProducts = JSON.parse(JSON.stringify(products))

        const randomProduct: any = [];

        while(randomProduct.length < 4) {
            let number = Math.floor(Math.random() * listedProducts.length);

            if(!randomProduct.includes(listedProducts[number])) {
                randomProduct.push(listedProducts[number]);
            }

        }
        
        return randomProduct;
    }

    async write() {
        const products = await ProductModel.find();

        await writeFile('products.json', JSON.stringify(products, null, 2) );

        return products;
    }

    async read() {
        const products =  JSON.parse(await readFile('products.json', "utf-8"))

        const arrayValueProducts = products.map(index => {
            return index.price
        })

        return arrayValueProducts;
    }

}