import productModel from "../models/productModel.js";
import fs from "fs";

// Add new product
const addProduct = async (req, res) => {
  try {
    const { name, description, price, image, category } = req.body;
    const image_filename = req.file.filename;
    const newProduct = new productModel({
      name,
      description,
      price,
      image: image_filename,
      category,
    });
    await newProduct.save();
    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error adding product" });
  }
};

// All product list
const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
};

// Remove product
const removeProduct = async (req, res) => {
  try {
    const productId = req.body.id;
    const product = await productModel.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    fs.unlinkSync(`uploads/${product.image}`);
    await productModel.findByIdAndDelete(productId);
    res.status(200).json({ message: "Product removed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error removing product" });
  }
};

export { addProduct, listProducts, removeProduct };
