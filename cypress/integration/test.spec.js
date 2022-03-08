describe('My First Test', () => {
    it('B', () => {
       cy.visit('https://api.toodledo.com/3/account/authorize.php?response_type=code&client_id=toodledid&state=false&scope=basic%20tasks%20write')
       cy.get('input[name="authorized"]')
  //     .should('be.visible')
         .should('have.attr', 'href')
         .then((href) => {
            cy.log(href)
            cy.request('POST', href, {
                 email: Cypress.env('email'),
                 password: Cypress.env('password'),
            }).then((response) => {
                 // pull out the location redirect
                 const loc = response.headers['Location']
                 cy.log(loc)
                 cy.log(response)
            })
           })
         
    })
})
