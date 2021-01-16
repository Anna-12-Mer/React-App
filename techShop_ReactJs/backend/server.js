const express = require('express');
const dotenv = require('dotenv'); 
const ConnectDB = require('./config/db')
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');

dotenv.config(); 
ConnectDB.connectDb(); 


const app = express(); 
app.get('/', (req, res)=>{
    res.send('API is running ...'); 
});
app.use('/api/products',productRoutes);


const PORT = process.env.PORT || 5000
app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
