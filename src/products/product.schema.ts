import { model, Schema } from 'mongoose';

const ProductSchema = new Schema({
    name: {
        required: true,
        type: String,
    },
    quantity: {
        required: true,
        type: Number,
    }, 
    price: {
        required: true,
        type: Number,   
    }
})

export default model('Product', ProductSchema)