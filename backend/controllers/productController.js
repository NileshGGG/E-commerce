const Product = require("../models/Product");

// GET ALL PRODUCTS
const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// CREATE PRODUCT
const createProduct = async (req, res) => {
  const { name, description, price, image, category } = req.body;
  const product = new Product({
    name,
    description,
    price,
    image,
    category,
  });
  const savedProduct = await product.save();
  res.status(201).json(savedProduct);
};

// UPDATE PRODUCT
const updateProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }
  product.name = req.body.name || product.name;

  product.description =
    req.body.description || product.description;

  product.price = req.body.price || product.price;

  product.image = req.body.image || product.image;

  product.category =
    req.body.category || product.category;

  const updatedProduct = await product.save();
  res.json(updatedProduct);
};


// DELETE PRODUCT

const deleteProduct = async (req, res) => {

  const product = await Product.findById(req.params.id);

  if (!product) {

    return res.status(404).json({
      message: "Product not found",
    });

  }

  await product.deleteOne();

  res.json({
    message: "Product deleted",
  });

};


module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};