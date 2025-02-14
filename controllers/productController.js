const Product = require("../models/Product");

// Add a new product (only vendors)
exports.addProduct = async (req, res) => {
    try {
        const { name, description, price, tags, isDigital } = req.body;
        const newProduct = new Product({
            name,
            description,
            price,
            vendor: req.user.id,
            tags,
            isDigital
        });

        await newProduct.save();
        res.status(201).json({ message: "Product added successfully", product: newProduct });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// Get all products (public access)
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find().populate("vendor", "name email");
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};
