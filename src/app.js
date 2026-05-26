const express = require('express');
const path = require('path');
 
const productRoutes = require('./routes/productRoutes');
 
const app = express();
 
// Middleware para ler JSON no body das requisições (POST)
app.use(express.json());
 
// Serve arquivos estáticos da pasta /public (index.html, imagens, CSS)
app.use(express.static(path.join(__dirname, '../public')));
 
// Rotas da API
app.use('/products', productRoutes);
 
module.exports = app;
 