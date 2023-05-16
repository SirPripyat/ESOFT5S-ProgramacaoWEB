import { model, Schema} from 'mongoose';

const StockSchema = new Schema({
    name: {
        type: String,
    },
    quantity: {
        type: Number,
    },
    price: {
        type: Number,
    },
    valorStock: {
        type: Number,
    }
})

export default model('Stock', StockSchema);

