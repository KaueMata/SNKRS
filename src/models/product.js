const fs = require('fs');
const path = require('path');

// Caminho para o arquivo JSON que simula o banco de dados
const DB_PATH = path.join(__dirname, '../../products.json');

/**
 * Lê todos os produtos do arquivo JSON.
 * @returns {Array} Lista de produtos.
 */
const readProducts = () => {
  try {
    if (!fs.existsSync(DB_PATH)) {
      // Se o arquivo não existe, retorna lista vazia e cria o arquivo
      fs.writeFileSync(DB_PATH, JSON.stringify([], null, 2), 'utf-8');
      return [];
    }
    const data = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Erro ao ler products.json:', error.message);
    throw new Error('Não foi possível acessar o banco de dados local.');
  }
};

/**
 * Salva a lista completa de produtos no arquivo JSON.
 * @param {Array} products - Array de produtos a ser salvo.
 */
const writeProducts = (products) => {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(products, null, 2), 'utf-8');
  } catch (error) {
    console.error('Erro ao escrever em products.json:', error.message);
    throw new Error('Não foi possível salvar no banco de dados local.');
  }
};

/**
 * Retorna todos os produtos.
 * @returns {Array}
 */
const findAll = () => {
  return readProducts();
};

/**
 * Busca um produto pelo ID.
 * @param {string} id
 * @returns {Object|null} Produto encontrado ou null.
 */
const findById = (id) => {
  const products = readProducts();
  return products.find((p) => p.id === id) || null;
};

/**
 * Cria um novo produto e adiciona ao arquivo JSON.
 * Gera um ID único baseado em timestamp.
 * @param {Object} productData - Dados do novo produto.
 * @returns {Object} Produto criado.
 */
const create = (productData) => {
  const products = readProducts();

  const newProduct = {
    id: Date.now().toString(), // ID temporário via timestamp
    name: productData.name,
    style: productData.style,
    price: parseFloat(productData.price),
    description: productData.description,
    sku: productData.sku,
    status: productData.status || 'disponivel',
    images: productData.images || [],
  };

  products.push(newProduct);
  writeProducts(products);

  return newProduct;
};

module.exports = {
  findAll,
  findById,
  create,
};