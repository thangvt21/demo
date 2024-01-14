import { Document, Schema, model, models } from "mongoose";

export interface IProduct extends Document {
    _id: string;
    name: string;
    variant: { _id: string, name: string }
    createdAt: Date;
    frontUrl: string;
    updatedAt: Date;
    backUrl?: string;
    price: string;
    category: { _id: string, name: string }
    organizer: { _id: string, firstName: string, lastName: string }
}

const ProductSchema = new Schema({
    name: { type: String, required: true },
    variant: { type: Schema.Types.ObjectId, ref: 'Variant' },
    createdAt: { type: Date, default: Date.now },
    frontUrl: { type: String, required: true },
    updatedAt: { type: Date, default: Date.now },
    backUrl: { type: String },
    price: { type: String },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    organizer: { type: Schema.Types.ObjectId, ref: 'User' },
})

const Product = models.Product || model('Product', ProductSchema);

export default Product;