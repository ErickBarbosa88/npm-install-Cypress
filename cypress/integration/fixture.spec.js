/// <reference types="cypress" />

describe('fixtures text', () => {

  before(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
  })

  it('pegando dados de um arquivo fixado', () => {
    cy.fixture('userData').as('usuario').then(function () {
      cy.get('#formNome').type(this.usuario.nome)
      cy.get('#formSobrenome').type(this.usuario.sobrenome)
      cy.get(`[name=formSexo][value=${this.usuario.sexo}]`).click()
      cy.get(`[name=formComidaFavorita][value=${this.usuario.comida}]`).click()
      cy.get('#formEscolaridade').select('Mestrado')
      cy.get('#formEsportes').select('Corrida')
      cy.get('#formCadastrar').click()
      cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado')
    })

  })
})







