const Product = require('../models/product');

/**
 * GET /products
 * Lista todos os produtos disponíveis na vitrine.
 */
const getAllProducts = async (req, res) => {
  try {
    console.log('GET /products - iniciando...');
    const products = await Product.findAll();
    console.log(`GET /products - ${products.length} produtos encontrados`);
    return res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    console.error('GET /products - Erro:', error.message);
    console.error(error.stack);
    return res.status(500).json({
      success: false,
      message: `Erro ao buscar produtos: ${error.message}`,
    });
  }
};

/**
 * GET /products/:id
 * Busca um produto específico pelo ID (página de detalhes).
 */
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

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
    console.error('GET /products/:id - Erro:', error.message);
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
const createProduct = async (req, res) => {
  try {
    const { name, style, price, description, sku, status, images } = req.body;

    // Validação dos campos obrigatórios
    if (!name || !style || !price || !sku) {
      return res.status(400).json({
        success: false,
        message: 'Campos obrigatórios ausentes: name, style, price e sku são necessários.',
      });
    }

    const newProduct = await Product.create({
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
    console.error('POST /products - Erro:', error.message);
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