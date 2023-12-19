const Product = require("../models/productModel");

//create product
exports.createProduct = async (req, res, next) => {
    const {productName, price, description, category, quantity, productStatus, image, createdAt} = req.body
    try {
      await Product.create({
        productName, 
        price, 
        description, 
        category, 
        quantity, 
        productStatus, 
        image
      }).then(product =>
        res.status(200).json({
          message: "Product successfully created",
          product,
        })
      )
    } catch (err) {
      res.status(401).json({
        message: "Product not successful created",
        error: err.message,
      })
    }
  }
  
//find id of product to edit
exports.editProduct = async (req, res, next) => {
  const {
    _id,
    productName,
    price,
    description,
    category,
    quantity,
    productStatus,
    image,
    createdAt
  } = req.body;

  // Check if the necessary fields (productId) are present
  if (!_id) {
    return res.status(400).json({ message: "Product ID is missing" });
  }

  try {
    // Find the product by ID
    const product = await Product.findById(_id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Update product fields individually if they exist in the request body
    if (productName) product.productName = productName;
    if (price) product.price = price;
    if (description) product.description = description;
    if (category) product.category = category;
    if (quantity) product.quantity = quantity;
    if (productStatus) product.productStatus = productStatus;
    if (image) product.image = image;
    if (createdAt) product.createdAt = createdAt;

    // Save the updated product
    const updatedProduct = await product.save();

    res.status(200).json({
      message: 'Product updated successfully',
      product: updatedProduct,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Error updating product',
      error: err.message,
    });
  }
};

//search products
exports.searchProduct = async (req, res) => {
  try {
    const { productName } = req.body;

    let query = {};

    if (productName) {
      query = { $text: { $search: productName } };
      // Using $text operator for text search on productName field
    }

    const products = await Product.find(query);

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error: error.message });
  }
};

  //call all products
  exports.getAllProducts = async (req, res) => {
    try {
      const products = await Product.find(); // Retrieve all products without any filters
  
      res.json(products); // Respond with all the products fetched
    } catch (error) {
      res.status(500).json({ message: 'An error occurred', error: error.message });
    }
  };

  //delete product
  exports.deleteProduct = async (req, res, next) => {
    const { _id } = req.body
    await Product.findById(_id)
      .then(product => product.deleteOne())
      .then(product =>
        res.status(201).json({ message: "Product successfully deleted", product })
      )
      .catch(error =>
        res
          .status(400)
          .json({ message: "An error occurred", error: error.message })
          )
  }

  //get product
  exports.getProduct = async (req, res) => {
    const productId = req.params.id; // Assuming the ID is passed in the request parameters
  
    try {
      // Find a product by its _id
      const product = await Product.findOne({ _id: productId });
  
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      // Respond with the found product
      res.status(200).json({ product });
    } catch (error) {
      res.status(500).json({ message: 'An error occurred', error: error.message });
    }
  };
  
  