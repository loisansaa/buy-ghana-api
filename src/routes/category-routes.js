import { Router } from "express";
import { addCategory, deleteCategory, getCategories, updateCategory } from "../controllers/categories-controller.js";
import { categoryStorage } from "../utilities/multer.js";


const CategoryRouter = Router();

CategoryRouter.post("/", categoryStorage.single("image"), addCategory )

CategoryRouter.get("/", getCategories );

CategoryRouter.put("/:id", updateCategory );

CategoryRouter.delete("/:id", deleteCategory );

export default CategoryRouter;