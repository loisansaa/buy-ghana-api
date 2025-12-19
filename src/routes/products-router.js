import { Router } from "express";

import { addProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product-controller.js";
import { productStorage } from "../utilities/multer.js";

const ProductsRouter = Router();

ProductsRouter.post("/", productStorage.single("image"), addProduct );
ProductsRouter.get("/", getProducts );

ProductsRouter.put("/:id", updateProduct );

ProductsRouter.delete("/:id", deleteProduct );

export default ProductsRouter;