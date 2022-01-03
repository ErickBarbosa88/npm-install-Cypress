/// <reference types="cypress" />

import loc from '../../support/locators'

describe("deve testar a nivel funcional:", () => {
  before(() => {
    cy.login('cypress@gmail.com', '12345')
    cy.resetApp()
  })

  it('should create an account: ', () => {
    cy.get(loc.MENU.SETTINGS).click()
    cy.get(loc.MENU.CONTAS).click()
    cy.get(loc.CONTAS.NOME).type('Conta teste')
    cy.get(loc.CONTAS.BTN).click({ multiple: true })
    cy.get(loc.MESSAGE).should('contain', 'Conta inserida com sucesso')
  })

  it('Should update an account', () => {
    //cy.get(':nth-child(7) > :nth-child(2) > :nth-child(1)')
    cy.get('[data-test="menu-settings"]').click()
    cy.get(':nth-child(4) > div > :nth-child(1)').click()
    cy.xpath(loc.CONTAS.XP_BTN_ALTERAR).click()
    cy.get(loc.CONTAS.NOME).clear().type('conta alterada')
    cy.get(loc.CONTAS.BTN_SALVAR).click({ multiple: true })
    cy.get(loc.MESSAGE).should('contain', 'Conta inserida com sucesso')
  })

  it('should create a transaction', () => {
    cy.get(loc.MENU.MOVIMENTACAO).click()
    cy.get(loc.MOVIMENTACAO.DESCRICAO).type('DESC')
    cy.get(loc.MOVIMENTACAO.VALOR).type('123')
    cy.get(loc.MOVIMENTACAO.INTERESSADO).type('INTER')
    cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
    cy.get(loc.MESSAGE).should('contain', 'sucesso')

  })

})