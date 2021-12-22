/// <reference types="cypress" />


describe('Cypress basics', () => {

  it("Testando titulo do site", () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')

    cy.title().should('be.equal', 'Campo de Treinamento').and('contain', 'Campo')
  })


  it.only('Encontrar e interagir com um elemento', () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')

    cy.get('#buttonSimple').click()

  })

})