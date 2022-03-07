describe('My First Test', () => {
    it('clicking "type" navigates to a new url', () => {
    cy.visit('https://toodledid.herokuapp.com/')
    cy.get('#auth')
    .should('be.visible')

     cy.get('#email')
     .should('be.visible')
     .type(process.env.EMAIL)
     cy.get('input[type="password"]')
     .should('be.visible')
     .type(process.env.PASSWORD)
   cy.get('input[name="authorized"]')
     .should('be.visible')
     .click()
  })
})
