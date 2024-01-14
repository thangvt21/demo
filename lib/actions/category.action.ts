"use server"
import { connectToDatabase } from '../database';
import Category from '../database/models/category.model';
import { handleError } from '../utils';
import { CreateCategoryParams } from './../../types/index';


export const CreateCategory = async ({ categoryName }: CreateCategoryParams) => {
    try {
        await connectToDatabase();
        const newCategory = await Category.create({ name: categoryName });
        return JSON.parse(JSON.stringify(newCategory));
    } catch (error) {
        handleError(error)
    }
}

export const getAllCategories = async () => {
    try {
        await connectToDatabase();
        const newCategory = await Category.find();
        return JSON.parse(JSON.stringify(newCategory));
    } catch (error) {
        handleError(error)
    }
}