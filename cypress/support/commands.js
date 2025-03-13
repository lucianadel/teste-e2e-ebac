Cypress.Commands.add('adicionarProdutosAoCarrinho', (produtos) => {
    produtos.forEach((produto) => {
      cy.get('.products li.product').contains(produto.nomeProduto).click();
      cy.get(`.variation-select-size`).select(produto.tamanho);
      cy.get(`.variation-select-pa_color`).select(produto.cor);
      cy.get('.input-text.qty').clear().type(produto.quantidade);
      cy.get('.single_add_to_cart_button').click();
      cy.get('.woocommerce-message').should('be.visible').and('contain', produto.nomeProduto);
      cy.get('.top-link-cart > a').click()
    });
  });