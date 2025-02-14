const express = require("express");
const { addProduct, getProducts } = require("../controllers/productController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

router.post("/", authMiddleware, roleMiddleware(["vendor"]), addProduct);
router.get("/", getProducts);

module.exports = router;
