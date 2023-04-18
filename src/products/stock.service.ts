import productSchema from "./product.schema";
import stockSchema from "./stock.schema";

class StockService {
    async getStock() {
        const productList = await productSchema.find();

        const stockProducts = productList.map(item => {
            const stock = {
                name: item.name,
                quantity: item.quantity,
                price: item.price,
                valorStock: item.quantity * item.price
            }

            return stock;
        })

        const stock = await stockSchema.create(stockProducts);

        return stock;
    }

    async findStock() {
        const stock = await stockSchema.find();

        const stockList = stock.reduce((acumulador, index) => {
            let valorFinal = acumulador + (index.valorStock ? index.valorStock : 0);

            return valorFinal;
        }, 0)

        return stockList;
    }
}

export default new StockService();