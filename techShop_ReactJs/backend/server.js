const express = require('express');
const dotenv = require('dotenv'); 
const products = require('./data/products')

dotenv.config()

const app = express(); 
app.get('/', (req, res)=>{
    res.send('API is running ...'); 
});

// Get Products 
app.get('/api/products', (req, res)=>{
    res.json(products)
});
// Get product by _id 
app.get('/api/products/:id', (req, res)=>{
    const product = products.find((p) => p._id === req.params.id)
    console.log('here');
    res.json(product)
});
const PORT = process.env.PORT || 5000
app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
