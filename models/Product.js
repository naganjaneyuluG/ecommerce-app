const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    vendor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    tags: [String],
    isDigital: { type: Boolean, default: false },
});

module.exports = mongoose.model("Product", ProductSchema);
