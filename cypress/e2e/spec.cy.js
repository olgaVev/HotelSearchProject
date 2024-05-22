
///<reference types = "Cypress"/>

describe('empty spec', () => {
  it('test cypress io example', () => {
    cy.visit('https://example.cypress.io')
    cy.url().should('eq','http://example.cypress.io')
  })
})