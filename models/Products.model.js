import { Schema, model } from "mongoose";

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    desc: { type: String, required: true },
    partNumber: { type: String, required: true },
    quantity: { type: Number, required: true, min: 0 },
    category: { type: String, required: true },
    purchasePrice: { type: Number, required: true },
    salePrice: { type: Number, required: true },
    supplier: { type: String, required: true },
    resupplyPoint: { type: Number, required: true },
    productImg: { type: String, default: "foto do produto", required: true },
    business: {
      type: Schema.Types.ObjectId,
      ref: "Business",
      required: true,
    },
    isActive: { type: Boolean, default: true, required: true },
  },
  {
    timestamps: true,
  }
);

const ProductModel = model("Product", ProductSchema);

export default ProductModel;
