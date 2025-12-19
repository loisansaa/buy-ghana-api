import Category from "../models/categories-schema.js";
import {categoryValidator} from "../validators/category-validator.js";


export const addCategory = async (req, res) => {
    try {
        const image = req.file?.path;
      const { error, value } = categoryValidator.validate({...req.body, image}, { abortEarly: false });
      if (error) {
        return res.status(400).json({ message: "Validation failed", error: error.details[0].message });
      }
const result = await Category.create(value);
      res.status(201).json({message: "Category created successfully", category: result});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
    }

export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find(); 
        res.status(200).json({categories});
    } catch (error) {
        res.status(500).json({ message: "failed to retrieve categories", error: error.message });
    } 
};

export const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const value = req.body;
        const updatedCategory = await Category.findByIdAndUpdate(id, value, { new: true });
        if (!updatedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.status(200).json({ message: "Category updated successfully", category: updatedCategory });
    } catch (error) {
        res.status(500).json({ message: "Failed to update category", error: error.message });
    } 
};

export const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;  
        const deletedCategory = await Category.findByIdAndDelete(id);
        if (!deletedCategory) {
            return res.status(404).json({ message: "Category not found" });
        } 
        res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete category", error: error.message });
    }
};

