# 👟 SNKRS - Sistema de Gerenciamento de Vendas de Tênis

Sistema web REST desenvolvido para gerenciamento de catálogo e vendas de tênis (sneakers), permitindo que usuários visualizem produtos e que administradores realizem o controle completo do inventário.

Projeto acadêmico do curso de Análise e Desenvolvimento de Sistemas (ADS).

## 📌 1. Objetivo do Sistema

O sistema tem como objetivo permitir o gerenciamento centralizado de produtos, facilitando a consulta do catálogo pelos clientes e a administração do estoque pelos administradores.

## 🧠 2. Regras de Negócio

### 👤 Usuário

* RN01 – O e-mail deve ser obrigatório e único.
* RN02 – A senha deve possuir no mínimo 8 caracteres.
* RN03 – O usuário deve ser autenticado por e-mail e senha.
* RN04 – As senhas devem ser armazenadas criptografadas com bcrypt.
* RN05 – O perfil do usuário deve ser definido por role (`admin` ou `user`).
* RN06 – Apenas administradores podem gerenciar produtos.

### 👟 Produto

* RN07 – O nome do produto é obrigatório.
* RN08 – O estilo do produto é obrigatório.
* RN09 – O preço deve ser maior que zero.
* RN10 – O SKU deve ser único no sistema.
* RN11 – O produto deve possuir status válido (`disponivel`, `indisponivel` ou `descontinuado`).
* RN12 – O sistema deve permitir múltiplas imagens por produto.
* RN13 – Apenas arquivos JPG, PNG, WebP ou PDF podem ser enviados.
* RN14 – O administrador responsável deve ser registrado no cadastro do produto.

## 📋 3. Casos de Uso

### 🎯 UC01 – Registrar Usuário

**Ator:** Cliente

**Fluxo Principal**

* Usuário informa e-mail e senha.
* Sistema valida os dados.
* Sistema verifica duplicidade do e-mail.
* Sistema criptografa a senha.
* Sistema salva o usuário e retorna confirmação.

### 🎯 UC02 – Autenticar Usuário

**Ator:** Cliente / Administrador

**Fluxo Principal**

* Usuário informa credenciais.
* Sistema valida a senha.
* Sistema gera token JWT.
* Sistema retorna acesso autorizado.

### 🎯 UC03 – Cadastrar Produto

**Ator:** Administrador

**Fluxo Principal**

* Admin informa os dados do produto.
* Sistema valida os campos obrigatórios.
* Sistema verifica duplicidade do SKU.
* Sistema salva o produto.

### 🎯 UC04 – Upload de Imagem

**Ator:** Administrador

**Fluxo Principal**

* Admin seleciona o produto.
* Envia imagem.
* Sistema valida o arquivo.
* Sistema salva a imagem e registra o caminho no banco.

### 🎯 UC05 – Listar Produtos

**Ator:** Cliente / Administrador

**Fluxo Principal**

* Sistema retorna lista de produtos.
* Permite filtros, ordenação e paginação.

### 🎯 UC06 – Atualizar Produto

**Ator:** Administrador

**Fluxo Principal**

* Admin seleciona o produto.
* Altera informações.
* Sistema valida e salva as alterações.

### 🎯 UC07 – Excluir Produto

**Ator:** Administrador

**Fluxo Principal**

* Admin seleciona o produto.
* Sistema solicita confirmação.
* Produto e arquivos associados são removidos.

## 📌 4. Requisitos Funcionais

* RF01 – Permitir cadastro de usuários.
* RF02 – Permitir autenticação via login.
* RF03 – Permitir listagem de produtos.
* RF04 – Permitir busca de produtos por ID.
* RF05 – Permitir criação de produtos.
* RF06 – Permitir atualização de produtos.
* RF07 – Permitir exclusão de produtos.
* RF08 – Permitir upload de imagens.
* RF09 – Gerar e validar tokens JWT.
* RF10 – Implementar filtros e paginação.

## ⚙ 5. Requisitos Não Funcionais

* RNF01 – Utilizar arquitetura REST.
* RNF02 – Comunicação via HTTP/HTTPS.
* RNF03 – Persistência em MySQL utilizando Sequelize.
* RNF04 – Validação de dados antes da persistência.
* RNF05 – Garantir integridade referencial.
* RNF06 – Aceitar uploads de até 5MB.
* RNF07 – Registrar timestamps automaticamente.
* RNF08 – Utilizar bcrypt para criptografia de senhas.
* RNF09 – Utilizar JWT com expiração de 24 horas.
* RNF10 – Retornar respostas em formato JSON.

## 🏗 6. Arquitetura

**Backend:** Node.js + Express

**Banco de Dados:** MySQL + Sequelize ORM

**Autenticação:** JWT

**Armazenamento:** Sistema de arquivos local

### Arquitetura em Camadas

* Controllers
* Models
* Routes
* Middleware
* Config

## 🧪 7. Plano de Testes

### Testes de Usuário

* Cadastro com e-mail válido.
* Rejeição de e-mail duplicado.
* Validação de senha mínima.
* Autenticação com credenciais válidas e inválidas.

### Testes de Produto

* Cadastro de produto válido.
* Rejeição de SKU duplicado.
* Validação de preço.
* Restrição de acesso para usuários comuns.

### Testes de Upload

* Upload de imagens válidas.
* Rejeição de arquivos inválidos.
* Validação de tamanho máximo.

### Testes de Segurança

* Validação de JWT.
* Proteção de rotas administrativas.
* Senhas não retornadas nas respostas.
* Proteção contra SQL Injection através do ORM.

## 🎓 8. Considerações Acadêmicas

O sistema foi desenvolvido seguindo princípios de:

* Arquitetura REST
* Padrão MVC
* Autenticação com JWT
* Criptografia de senhas com bcrypt
* ORM Sequelize
* Validação de dados
* Integridade referencial
* Boas práticas de segurança
* Testes unitários e de integração