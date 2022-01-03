/// <reference types="cypress" />

describe('Cypress basics', () => {
  before(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
  })

  beforeEach(() => {
    cy.reload()
  })

  it('Usando JQuery selector...', () => {
    cy.get(':nth-child(1) > :nth-child(3) > [type="button"]')
    cy.get('table#tabelaUsuarios tbody > tr:eq(0) td:nth-child(3) > input').click()
  })

  it('using Xpath', () => {
    cy.xpath('//input[contains(@onclick, \'Francisco\')]')
    cy.xpath("//table[@id='tabelaUsuarios']//td[contains(., 'Francisco')]/..//input[@type='text']")
    cy.xpath("//td[contains(.,'Usuario A')]/following-sibling::td[contains(., 'Mestrado')]/..//input[@type='text']").type('funciona')
  })

})