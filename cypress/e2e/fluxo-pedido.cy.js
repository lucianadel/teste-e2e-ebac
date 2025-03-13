/// <reference types="cypress" />
import produtosPage from "../support/page_objects/produtos.page";

context('Exercício - Testes End-to-End - Fluxo de Pedido', () => {
  /* Como cliente 
    Quero acessar a Loja EBAC 
    Para fazer um pedido de 4 produtos 
    Fazendo a escolha dos produtos
    Adicionando ao carrinho
    Preenchendo todas opções no checkout
    E validando minha compra ao final 
  */

    beforeEach(() => {
      produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto da lista', () => {
      produtosPage.buscarProdutoLista('Aero Daily Fitness Tee')
      cy.get('.woocommerce-product-details__short-description > p').should('contain', 'This is a variable product called a Aero Daily Fitness Tee')
      
  
    });

    it.only('Deve buscar um produto com sucesso', () => {
      let produto = 'Apollo Running Short'
      produtosPage.buscarProduto(produto)
      cy.get('.product_title').should('contain', produto)
      
      
    });

    it('Deve visitar a pagina do produto', () => {
      
    });

    it('Deve adicionar produto ao carrinho', () => {
      
    });
  });