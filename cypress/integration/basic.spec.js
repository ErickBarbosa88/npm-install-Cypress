/// <reference types="cypress" />


describe('Cypress basics', () => {

  it("Testando titulo do site", () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')

    cy.title()
      .should('be.equal', 'Campo de Treinamento')
      .and('contain', 'Campo')

    let syncTitle

    cy.title().then(title => {
      console.log(title)

      cy.get('#formNome').type(title)
      syncTitle = title
    })
    cy.get('[data-cy=dataSobrenome]').then($el => {
      $el.val(syncTitle)
    })

    cy.get('#elementosForm\\:sugestoes').then($el => {
      cy.wrap($el).type(syncTitle)
    })

    cy.get('[data-test=dataEscolaridade] option')
      .should('have.length', 8)

    cy.get('[data-test=dataEscolaridade] option').then($arr => {
      const values = []
      $arr.each(function () {
        values.push(this.innerHTML)
      })
      expect(values).to.include.members(["Superior", "Mestrado"])
    })

  })


  it('Encontrar e interagir com um elemento', () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')

    cy.get('#buttonSimple').click()
    cy.get('#buttonSimple').should('have.value', 'Obrigado!')


  })

})