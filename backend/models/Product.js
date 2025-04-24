import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    img: { type: String, required: true }, 
    brand: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    type: { 
      type: String, 
      enum: ['casual', 'formal', 'sport', 'sleep'],
      required: true 
    },
    target: { 
      type: String, 
      enum: ['men', 'women', 'children', 'all'],
      required: true 
    },
    price: { type: Number, required: true, min: 1 },
    sale: { type: Number, min: 0 }, 
  })

export default mongoose.model('Product', ProductSchema);