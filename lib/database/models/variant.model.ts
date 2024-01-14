import { Document, Schema, model, models } from "mongoose";

export interface IVariant extends Document {
    _id: string;
    name: string;
}

const VariantSchema = new Schema({
    name: { type: String, required: true, unique: true },
})

const Variant = models.Variant || model('Variant', VariantSchema);

export default Variant;