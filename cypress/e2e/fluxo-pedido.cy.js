/// <reference types="cypress" />
import produtosPage from "../support/page_objects/produtos.page";
import checkoutPage from "../support/page_objects/checkout.page";

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

    it('Deve adicionar produtos ao carrinho e finalizar a compra', () => {

      cy.fixture('produtos').then(dados => {   
        produtosPage.buscarProduto(dados[1].nomeProduto)
        produtosPage.addProdutoCarrinho(
          dados[1].tamanho,
          dados[1].cor,
          dados[1].qtd)
          cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)
        });
        
        checkoutPage.acessarCarrinho();
        checkoutPage.concluirCompra();
        
        cy.fixture('dados-checkout').then(dadosCheckout => {
          checkoutPage.preencherCheckout(
            dadosCheckout[0].nome, 
            dadosCheckout[0].sobrenome, 
            dadosCheckout[0].empresa, 
            dadosCheckout[0].pais, 
            dadosCheckout[0].endereco, 
            dadosCheckout[0].cidade, 
            dadosCheckout[0].estado, 
            dadosCheckout[0].cep, 
            dadosCheckout[0].telefone, 
            dadosCheckout[0].email
          );
        });

        checkoutPage.finalizarCompra()
        checkoutPage.conferirPedidoRecebidoComSucesso("Pedido recebido")
    });
});    