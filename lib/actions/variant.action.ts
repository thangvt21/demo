"use server"
import { connectToDatabase } from '../database';
import Variant from '../database/models/variant.model';
import { handleError } from '../utils';
import { CreateVariantParams } from './../../types/index';


export const CreateVariant = async ({ variantName }: CreateVariantParams) => {
    try {
        await connectToDatabase();
        const newVariant = await Variant.create({ name: variantName });
        return JSON.parse(JSON.stringify(newVariant));
    } catch (error) {
        handleError(error)
    }
}


export const getAllVariants = async () => {
    try {
        await connectToDatabase();
        const newVariant = await Variant.find();
        return JSON.parse(JSON.stringify(newVariant));
    } catch (error) {
        handleError(error)
    }
}