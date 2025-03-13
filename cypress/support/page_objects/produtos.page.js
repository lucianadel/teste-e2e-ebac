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
    // cy.visit(`produtos/${nomeProduto}`)
    const urlFormatada = nomeProduto.replace(/ /g, '-')
    cy.visit(`produtos/${urlFormatada}`)


  }

  addProdutoCarrinho() {

  }
}

export default new ProdutosPage(); // Exporta uma instância da classe