/// <reference types="cypress" />

it('A external test...', () => {

})

describe('Should group test...', () => {
  describe('should group more specifc tests...',() => {


    it.skip('A specific test...', () => {

    })
  })

  describe('should group more specifc tests 2...',() => {


    it('A specific test2...', () => {

    })
  })


  it('A internal test...', () => {

  })

})