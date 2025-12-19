import {Schema, model}
from "mongoose"; 


const categorySchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true},
    image: {
        type: String,
        required: true,
        trim: true},
}, {timestamps: true});

const Category = model("Category", categorySchema);

export default Category;


