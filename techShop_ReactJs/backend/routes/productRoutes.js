const express = require('express');
const  expressAsyncHandler = require('express-async-handler');
const router = express.Router();
const Product = require('../models/productModel'); 

// Get Products 
router.get('/', async(req, res)=>{
    const products = await Product.find({})

    res.json(products)
});
// Get product by _id 
router.get('/:id', (req, res)=>{
    const product = products.find((p) => p._id === req.params.id)
    console.log('here');
    res.json(product)
});