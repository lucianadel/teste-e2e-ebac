class CheckoutPage {
    acessarCarrinho() {
        cy.get('.woocommerce-message > .button').click();
    }

    concluirCompra() {
        cy.get('.checkout-button').click()
    }

    preencherCheckout(nome, sobrenome, empresa, pais, endereco, cidade, estado, cep, telefone, email) {
        cy.get('#billing_first_name').type(nome);
        cy.get('#billing_last_name').type(sobrenome);
        cy.get('#billing_company').type(empresa);
        cy.get('#select2-billing_country-container').click().type(pais + '{enter}');
        cy.get('#billing_address_1').type(endereco);
        cy.get('#billing_city').type(cidade);
        cy.get('#select2-billing_state-container').click().type(estado + '{enter}');
        cy.get('#billing_postcode').type(cep);
        cy.get('#billing_phone').type(telefone);
        cy.get('#billing_email').type(email);
    }

    finalizarCompra() {
        cy.get('#terms').click()
        cy.get('#place_order').click();
    }

    conferirPedidoRecebidoComSucesso(mensagem) {
        cy.get('.page-title').should('contain', mensagem);
    }
  }
  
  export default new CheckoutPage();