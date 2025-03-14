class ProdutosPage {
  visitarUrl() {
      cy.visit('produto');
  }

  buscarProduto(nomeProduto) {
    cy.get('[name="s"]').eq(1).type(nomeProduto)
    cy.get('.button-search').eq(1).click()
  }

  buscarProdutoLista (nomeProduto) {
    cy.get('.products>.row')
    .contains(nomeProduto)
    .click();
  }

  visitarProduto(nomeProduto) {
     cy.visit(`produtos/${nomeProduto}`)
  }

  // Nesse ponto, o teste não estava passando, 
  // pois não estava conseguindo clicar corretamente. 
  // Acho que estava passando muito rápido ele estava se perdendo ou algo assim.
  // Após adicionar o wait, funcionou.

  //Com o cy.get().should('be.visible') não funcionou

  addProdutoCarrinho(tamanho, cor, quantidade) {
    cy.wait(100)
    cy.get('.button-variable-item-' + tamanho).click()
    cy.get('.button-variable-item-' + cor).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
  }
}

export default new ProdutosPage();