/// <reference types="cypress" />

describe('trabalhando com elementos basicos', () => {
  before(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
  })
  beforeEach(() => {
    cy.reload()
  })

  it('Text', () => {

    cy.get('body').should('contain', 'Cuidado')
    cy.get('span').should('contain', 'Cuidado')
    cy.get('.facilAchar').should('contain', 'Cuidado')
    cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
  })

  it('Links', () => {

    cy.get('[href="#"]').click()
    cy.get('#resultado').should('have.text', 'Voltou!')

    cy.reload()
    cy.get('#resultado').should('have.not.text', 'Voltou!')
    cy.contains('Voltar').click()
    cy.get('#resultado').should('have.text', 'Voltou!')

  })

  it('Campo de Texto', () => {
    cy.get('#formNome').type('Cypress teste')

    cy.get('#formNome').should('have.value', 'Cypress teste')

    cy.get('#elementosForm\\:sugestoes')
      .type('Testando caixa de texto 123')
      .should('have.value', 'Testando caixa de texto 123')

    cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
      .type('???')
      .should('have.value', '???')


    cy.get('[data-cy=dataSobrenome]')
      .type('Teste12345{backspace}{backspace}')
      .should('have.value', "Teste123")


    cy.get('#elementosForm\\:sugestoes')
      .clear()
      .type('Error{selectall}acerto', { delay: 100 })
      .should('have.value', "acerto")




  })

  it('RadioButton', () => {
    cy.get('#formSexoFem')
      .click()
      .should('be.checked')

    cy.get('#formSexoMasc').should('not.be.checked')

    cy.get("[name='formSexo']").should('have.length', 2)
  })

  it('checbox', () => {
    cy.get('[name=formComidaFavorita]')
      .click({ multiple: true })
      .should('be.checked')
  })

  it('comboBox', () => {
    cy.get('[data-test=dataEscolaridade]')
      .select('Superior')
      .should('have.value', 'superior')
  })

  it.only('comboBoxMultiplo', () => {
    cy.get('[data-testid="dataEsportes"]')
      .select(['natacao', 'Corrida', 'nada'])
    // cy.get('[data-testid="dataEsportes"]').should('have.value', ////['natacao', 'Corrida', 'nada'])
    cy.get('[data-testid="dataEsportes"]').then($el => {
      expect($el.val()).to.be.deep.equal(['natacao', 'Corrida', 'nada'])
      expect($el.val()).to.have.length(3)
    })
    cy.get('[data-testid="dataEsportes"]')
      .invoke('val')
      .should('eql', ['natacao', 'Corrida', 'nada'])

    //TODO validar opcoes selecionadas do combo multiplo
  })



})

