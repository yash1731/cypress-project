/// <reference types="cypress" />

describe('Basic Desktop Tests', () =>{

    beforeEach( () => {
        cy.fixture('example').then((user) => {
        cy.visit(user.url)  
      })   
    })

    it('Test checkout page', () => {
        //cy.viewport(1280,720)
        //cy.viewport('ipad-2')     

        // verify product page
        cy.contains('Women').should('exist')
        cy.contains('Women').should('have.text','Women')        
        cy.get('div')
        cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()

        cy.get('.button-medium > span').click() 
        cy.get('.cart_navigation > .button > span').click()

        // verify page url
        cy.url().should('include','order')

        // verify page and links
        cy.contains('Authentication').should('exist')
        cy.contains('Create an account').should('exist')
        cy.contains('Sign in').should('exist')
        cy.get('#SubmitLogin > span').click()
              
    })

    it('Log in page test', () => {

        cy.fixture('example').then((user) => {
        cy.get('.login').click()
        cy.url().should('include','my-account')       
        cy.get('#email').type(user.email)
        cy.get('#passwd').type(user.password)
        cy.get('#SubmitLogin > span').click()
        cy.contains('Yashpal DEWANGAN').should('exist')

        })      

    })   
    
})