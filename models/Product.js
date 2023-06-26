import mongoose, { Schema, model, models } from "mongoose";

const ProductScheme = new Schema({
    title: {type: String, required:true},
    description: String,
    price: {type: Number, required:true},
    images:[{type:String}],
    category: {type:mongoose.Types.ObjectId, ref: 'Category'},
    properties:{type:Object},
},{
    timestamps: true
})
export const Product = models.Product || model('Product', ProductScheme)