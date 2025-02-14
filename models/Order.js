const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    products: [{ product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }, quantity: Number }],
    address: { type: String, required: true },
    paymentMethod: { type: String, enum: ["COD"], default: "COD" },
    status: { type: String, enum: ["Pending", "Completed", "Cancelled"], default: "Pending" },
});

module.exports = mongoose.model("Order", OrderSchema);
