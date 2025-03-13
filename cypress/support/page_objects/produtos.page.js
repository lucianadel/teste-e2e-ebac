// cypress/support/page_objects/produtos.page.js

class ProdutosPage {
  visitarUrl() {
      cy.visit('produto'); // Substitua pela URL da sua loja
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
    // const urlFormatada = nomeProduto.replace(/ /g, '-')
    // cy.visit(`produtos/${urlFormatada}`)


  }

  // Nesse ponto, o teste não estava passando, 
  // pois não estava conseguindo clicar corretamente. 
  // Acho que estava passando muito rápido ele estava se perdendo ou algo assim.
  // Após adicionar o wait, funcionou.

  addProdutoCarrinho(tamanho, cor, quantidade) {
    cy.wait(100)
    cy.get('.button-variable-item-' + tamanho).click()
    cy.get('.button-variable-item-' + cor).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
  }
}

export default new ProdutosPage(); // Exporta uma instância da classe