"use server"
import { revalidatePath } from "next/cache"
import { connectToDatabase } from "../database"
import Category from "../database/models/category.model"
import Product from "../database/models/product.model"
import User from "../database/models/user.model"
import Variant from "../database/models/variant.model"
import { handleError } from "../utils"
import { CreateProductParams, DeleteProductParams, GetAllProductsParams, UpdateProductParams } from "@/types"

const populateProduct = async (query: any) => {
    return query
        .populate({ path: "organizer", model: User, select: "_id firsName lastName" })
        .populate({ path: "category", model: Category, select: "_id name" })
        .populate({ path: "variant", model: Variant, select: "_id name" })
}

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

export const getProductById = async (productId: string) => {
    try {
        await connectToDatabase();
        const product = await populateProduct(Product.findById(productId));
        if (!product) {
            throw new Error("Product not found.");
        }
        return JSON.parse(JSON.stringify(product));
    } catch (error) {
        handleError(error)
    }
}

export const getAllProducts = async ({ query, limit = 6, page, category }: GetAllProductsParams) => {
    try {
        await connectToDatabase();
        const conditions = {}
        const productsQuery = Product.find(conditions)
            .sort({ id: 'desc' })
            .skip(0)
            .limit(limit);

        const products = await populateProduct(productsQuery);
        const productsCount = await Product.countDocuments(conditions);
        return {
            data: JSON.parse(JSON.stringify(products)),
            totalPages: Math.ceil(productsCount / limit),
        }
    } catch (error) {
        handleError(error)
    }
}

export async function deleteProduct({ productId, path }: DeleteProductParams) {
    try {
        await connectToDatabase()

        const deletedProduct = await Product.findByIdAndDelete(productId)
        if (deletedProduct) revalidatePath(path)
    } catch (error) {
        handleError(error)
    }
}

export async function updateProduct({ userId, product, path }: UpdateProductParams) {
    try {
        await connectToDatabase()

        const productToUpdate = await Product.findById(product._id)
        if (!productToUpdate || productToUpdate.organizer.toHexString() !== userId) {
            throw new Error('Unauthorized or event not found')
        }

        const updatedProduct = await Product.findByIdAndUpdate(
            product._id,
            { ...product, category: product.categoryId, variant: product.variantId },
            { new: true }
        )
        revalidatePath(path)

        return JSON.parse(JSON.stringify(updatedProduct))
    } catch (error) {
        handleError(error)
    }
}