/// <reference types="cypress" />

import { TheinternetPage } from "../pages/TheInternetPage"

describe('Internet Alerts', () => {
    
    const theInternet = new TheinternetPage()

    beforeEach(() => {
        theInternet.navigate()
        cy.contains('JavaScript Alerts').click()
		
	})

    it('The title of the page is correct', () => {
     
        cy.get('h3').should('contain.text', 'JavaScript Alerts').and('be.visible')
        
    })

    it('Click the JS alert button and verify the text is correct', () => {
     
        cy.contains('Click for JS Alert').click()
        cy.get('#result').should('contain.text', 'You successfuly clicked an alert').and('be.visible')

    })
 


})

