/// <reference types="cypress" />

describe(":", () => {
  before(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
  })

  it('Going back to the past', () => {
    cy.get('#buttonNow').click()
    cy.get('#resultado > span').should('contain', '31/12/2021')

    const dt = new Date(2021, 31, 12, 1, 36, 50)
    cy.clock(dt.getTime())
    cy.get('#buttonNow').click()
    cy.get('#resultado > span').should('contain', '31/12/2021')


  })

})