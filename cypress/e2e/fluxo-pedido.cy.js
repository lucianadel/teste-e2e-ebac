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

    it('Deve buscar um produto com sucesso', () => {
      let produto = 'Apollo Running Short'
      produtosPage.buscarProduto(produto)
      cy.get('.product_title').should('contain', produto)
      
      
    });

    it('Deve visitar a pagina do produto', () => {
      produtosPage.visitarProduto('Zeppelin-yoga-pant')
      cy.get('.product_title').should('contain', 'Zeppelin Yoga Pant')
      
    });

    it('Deve adicionar produto ao carrinho', () => {
      let qtd = 4
      produtosPage.buscarProduto('Ingrid Running Jacket')
      produtosPage.addProdutoCarrinho('M', 'Red', qtd)

      cy.get('.woocommerce-message').should('contain', qtd + ' × “Ingrid Running Jacket” foram adicionados no seu carrinho.')
      
    });

    it('Deve adicionar produto ao carrinho buscando da massa de dados', () => {

      cy.fixture('produtos').then(dados => {   
        produtosPage.buscarProduto(dados[2].nomeProduto)
        produtosPage.addProdutoCarrinho(
          dados[2].tamanho,
          dados[2].cor,
          dados[2].qtd)
        cy.get('.woocommerce-message').should('contain', dados[2].nomeProduto)
      })
    });
  });