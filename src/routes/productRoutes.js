const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  createProduct,
} = require('../controllers/productController');

/**
 * @route   GET /products
 * @desc    Lista todos os tênis (feed/vitrine)
 * @access  Public
 */
router.get('/', getAllProducts);

/**
 * @route   GET /products/:id
 * @desc    Busca um tênis específico pelo ID (página de detalhes)
 * @access  Public
 */
router.get('/:id', getProductById);

/**
 * @route   POST /products
 * @desc    Cadastra um novo tênis (área do administrador)
 * @access  Admin
 * @body    { name, style, price, description, sku, status, images[] }
 */
router.post('/', createProduct);

module.exports = router;