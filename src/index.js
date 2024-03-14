// index.js

const express = require('express');
const dotenv = require('dotenv');
const productController = require('./product/product.controller');
const app = express();

dotenv.config();
app.get("/api", (req, res) => {
    res.send("Selamat datang di API gueh");
});
// Middleware
app.use(express.json());

// Routes
app.use('/products', productController);

// Start server
const PORT = process.env.PORT || 3000;
const HOST = process.env.APP_ENV !== 'production' ? 'localhost' : '192.168.43.68';

app.listen(PORT, HOST, () => {
    console.log(`Server berjalan pada http://${HOST}:${PORT}`);
});
