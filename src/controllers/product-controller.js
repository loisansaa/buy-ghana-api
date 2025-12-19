import Products from "../models/products-schema.js";
import {productValidator} from "../validators/products-validator.js"; 

export const addProduct = async (req, res) => {
    try {
        const image = req.file?.path;
      const { error, value } = productValidator.validate({...req.body, image}, { abortEarly: false });
      if (error) {
        return res.status(400).json({ message: "Validation failed", error: error.details[0].message });
      }
      const result = await Products.create(value);
      res.status(201).json({message: "Product created successfully", product: result});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

export const getProducts = async (req, res) => {
    try {
        const products = await Products.find().populate("category", "title"); 
        res.status(200).json({products});
    } catch (error) {
        res.status(500).json({ message: "failed to retrieve products", error: error.message });
    } 
};
export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const updatedProduct = await Products.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        res.status(500).json({ message: "Failed to update product", error: error.message });
    } 
};

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;  
        const deletedProduct = await Products.findByIdAndDelete(id);  
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete product", error: error.message });
    }
};

export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Products.findById(id).populate("category"); 
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ product });
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve product", error: error.message });
    }
};

