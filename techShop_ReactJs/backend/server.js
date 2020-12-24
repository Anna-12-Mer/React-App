const express = require('express');
const products = require('./data/products')

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

app.listen(5000,console.log('Server running on port 5000'))
