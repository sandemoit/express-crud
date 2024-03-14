const express = require("express");
const app = express();

app.get("/api", (req, res) => {
    res.send("Selamat datang di API akuh");
});

const productController = require("./product/product.controller");

app.use("/products", productController);