/// <reference types="cypress" />

import { TheinternetPage } from "../pages/TheInternetPage"
import { DropdownPage } from "../pages/DropdownPage"

describe('Dropdown Page Tests', () => {

    const theInternet = new TheinternetPage()
    const dropdownPage = new DropdownPage()

    beforeEach(() => {
        theInternet.navigate()
        cy.contains('Dropdown').click()
    })

    it('Dropdown page loads and the title is correct', () => {
        dropdownPage.getTitleandVerify('Dropdown List')
    })

    it('Select and verify Option 1 from the dropdown list', () => {
        dropdownPage.selectOptionandVerify('Option 1')

    })

    it('Select and verify Option 2 from the dropdown list', () => {
        dropdownPage.selectOptionandVerify('Option 2')
    })
})

