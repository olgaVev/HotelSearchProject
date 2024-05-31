///<reference types = 'Cypress'/>

describe 
( 'my Assignment', () =>
    
        {
            it ( 'Navigate to main page', () =>
                {
                    cy.visit('http://localhost:3000')
                    
                    ///Checking Address element
                    cy.get ('#tab1 > form > :nth-child(1)').should('be.visible')
                    cy.get ('#tab1 > form > :nth-child(1) > .label').should("have.text", "Going to")

                    ///Checking Check-in box
                    cy.get ('#tab1 > form > .row > :nth-child(1) > .input-group').should('be.visible')
                    cy.get ('#tab1 > form > .row > :nth-child(1) > .input-group > .label').should('have.text', "check-in")

                    ///Checking Check-out box
                    cy.get ('#tab1 > form > .row > :nth-child(2) > .input-group').should('be.visible')
                    cy.get ('#tab1 > form > .row > :nth-child(2) > .input-group > .label').should('have.text', "check-out")

                    ///Checking Travelers list
                    cy.get('#tab1 > form > :nth-child(3)').should('be.visible')
                    cy.get(':nth-child(3) > .label').should('have.text', "travellers")

                    ///Checking Add a flight checkbox
                    cy.contains('Add a flight').should('be.visible')
                    cy.get('[data-cy="flight_chk"]').should('be.visible')

                    // Checking Add a car checkbox
                    cy.contains('Add a car').should('be.visible')
                    cy.get('[data-cy="cars_chk"]').should('be.visible')
                    
                    // Checking Search button
                    cy.contains('search').should('be.visible')
                    

                }

            )
        }
)