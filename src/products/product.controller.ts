import { Request, Response } from "express";
import { ProductService } from "./product.service";
import stockService from "./stock.service";

class ProductController {

    async create(req: Request, res: Response) {
        const product = await new ProductService().create(req.body);

        return res.status(200).json(product);
    }

    async list(req: Request, res: Response) {
        const products = await new ProductService().list();

        return res.status(200).json(products);
    }

    async find(req: Request, res: Response) {
        const product = await new ProductService().find(req.params.id);

        return res.status(200).json(product);
    }

    async update(req: Request, res: Response) {
        const product = await new ProductService().update(req.params.id, req.body);

        return res.status(200).json(product);
    }

    async remove(req: Request, res: Response) {
        const product = await new ProductService().remove(req.params.id);

        return res.json('Product removed successfull');
    }

    async randomProducts(req: Request, res: Response) {
        const products = await new ProductService().randomProducts();

        return res.status(200).json(products);
    }

    async write(req: Request, res: Response) {
        const products = await new ProductService().write();

        return res.status(200).json(products);
    }

    async read(req: Request, res: Response) {
        const products = await new ProductService().read();

        return res.status(200).json(products);
    }

    async stock(req: Request, res: Response) {
        const stock = await stockService.getStock();

        return res.json(stock);
    }
    
    async findStock(req: Request, res: Response) {
        const countStock = await stockService.findStock();

        return res.json('The total value from stock is ' + countStock);
    }

}

export default new ProductController()