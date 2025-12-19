import { Schema,model } from "mongoose";

const productsSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    isInStock: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

const Products = model("Product", productsSchema);

export default Products;