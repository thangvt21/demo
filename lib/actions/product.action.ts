"use server"

import { connectToDatabase } from "../database"
import Product from "../database/models/product.model"
import User from "../database/models/user.model"
import { handleError } from "../utils"
import { CreateProductParams } from "@/types"

export const CreateProduct = async ({ product, userId, path }: CreateProductParams) => {
    try {
        await connectToDatabase();
        const organizer = await User.findById(userId);

        if (!organizer) {
            throw new Error("Organizer not found");
        }
        const newProduct = await Product.create({ ...product, category: product.categoryId, organizer: userId, variant: product.variantId });
        return JSON.parse(JSON.stringify(newProduct));
    } catch (error) {
        handleError(error);
    }
}