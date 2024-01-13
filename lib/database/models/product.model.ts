import { Document } from "mongodb";
import { Schema, model, models } from "mongoose";

export interface IProduct extends Document {
    _id: string;
    name: string;
    material: string;
    variant: string;
    createdAt: Date;
    updateAt: Date;
    frontUrl: string;
    backUrl: string;
    productType: string;
    price?: string;
    labelUrl?: string;
    category: {id: String, name:String};
}


const ProductSchema = new Schema({
    name: {type:String, required: true},
    material: {type:String, required: true},
    variant: {type:String, required: true},
    createdAt: { type: Date, default: Date.now },
    updateAt: {type: Date},
    frontUrl: {type: String, required: true},
    backUrl: {type: String, required:true},
    productType: {type: String, required: true},
    price: {type: String},
    labelUrl: {type: String},
    category: {type:Schema.Types.ObjectId, ref:'Category'},
})

const Product = models.Product || model('Product',ProductSchema);

export default Product;