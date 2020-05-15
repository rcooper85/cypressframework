export class DropdownPage {
    getTitleandVerify(title) {
        cy.get('h3').should('have.text', title)
    }

    selectOptionandVerify(option) {
        cy.get('#dropdown').select(option).should('contain', option)
    }



}