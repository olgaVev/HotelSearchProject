
///<reference types = "Cypress"/>

describe('The sanity test suite for travel site', () => {
    it('navigate to main page', () => {
      cy.visit('http://localhost:3000')
      cy.url().should('eq', 'http://localhost:3000/')
      
    })
    it('verify tab and elements on the page', () => {
      cy.visit('http://localhost:3000')
      cy.get('[data-cy="Hotels"]').should('be.visible')
      cy.get('[data-cy="Car"]').should('be.visible')
      cy.get('[data-cy="Flight"]').should('be.visible')
      cy.get('.checkbox-row > .m-r-45').should('be.visible')
      cy.get('.checkbox-row > :nth-child(2)').should('be.visible')
      //cy.get('#tab1 > form > .btn-submit').should('be.visible')
      //cy.contains('search').should('be.visible')
      cy.get('[type="submit"]').should('be.visible')
      
    })

    it('verify text of tags on the page', () => {
      cy.visit('http://localhost:3000')
      cy.get('[data-cy="Hotels"]').should('have.text', 'hotels')
      cy.get('[data-cy="Car"]').should('have.text', 'car')
      
      
    })
  })