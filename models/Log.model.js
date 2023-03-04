import { Schema, model } from "mongoose";

const LogSchema = new Schema({
  userName: { type: Schema.Types.ObjectId, ref: "User" },
  business: { type: Schema.Types.ObjectId, ref: "Business" },
  nameProduct: { type: Schema.Types.ObjectId, ref: "Product" },
  date: { type: Date, default: Date.now },

  quantityInput: { type: Number, min: 0 },
  purchasePrice: { type: Number },

  quantityOutput: { type: Number, min: 0 },
  salePrice: { type: Number },
});

const LogModel = model("Log", LogSchema);

export default LogModel;
