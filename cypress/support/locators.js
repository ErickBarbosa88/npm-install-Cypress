const locators = {
  LOGIN: {
    USER: '[data-test="email',
    PASSWORD: '[data-test="passwd"]',
    BTN_LOGIN: '.btn'
  },

  MENU: {
    SETTINGS: '[data-test="menu-settings"]',
    CONTAS: ':nth-child(4) > div > :nth-child(1)',
    RESET: ':nth-child(4) > div > :nth-child(2)',
    MOVIMENTACAO: "[data-test='menu-movimentacao']"
  },

  CONTAS: {
    NOME: '[data-test="nome"]',
    BTN: ':nth-child(2) > button',
    XP_BTN_ALTERAR: "//table//td[contains(., 'Conta teste')]/..//i[@class='far fa-edit']",
    BTN_SALVAR: ':nth-child(2) > button'
  },

  MOVIMENTACAO: {
    DESCRICAO: '[data-test="descricao"]',
    VALOR: '[data-test="valor"]',
    INTERESSADO: '[data-test="envolvido"]',
    BTN_SALVAR: ':nth-child(2) > :nth-child(2) > :nth-child(4)'
  },


  MESSAGE: '.toast-message'

}

export default locators;