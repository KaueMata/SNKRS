const Product = require('../models/product');

/**
 * GET /products
 * Lista todos os produtos disponíveis na vitrine.
 */
const getAllProducts = (req, res) => {
  try {
    const products = Product.findAll();
    return res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * GET /products/:id
 * Busca um produto específico pelo ID (página de detalhes).
 */
const getProductById = (req, res) => {
  try {
    const { id } = req.params;
    const product = Product.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: `Produto com id "${id}" não encontrado.`,
      });
    }

    return res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * POST /products
 * Cadastra um novo produto (área do administrador).
 * Espera no body: name, style, price, description, sku, status, images (array)
 */
const createProduct = (req, res) => {
  try {
    const { name, style, price, description, sku, status, images } = req.body;

    // Validação dos campos obrigatórios
    if (!name || !style || !price || !sku) {
      return res.status(400).json({
        success: false,
        message: 'Campos obrigatórios ausentes: name, style, price e sku são necessários.',
      });
    }

    const newProduct = Product.create({
      name,
      style,
      price,
      description,
      sku,
      status,
      images,
    });

    return res.status(201).json({
      success: true,
      message: 'Produto cadastrado com sucesso!',
      data: newProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
};