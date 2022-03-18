describe('My First Test', () => {
//     it('A', () => {
//         cy.visit('https://toodledid.herokuapp.com/')
//         cy.get('#auth')
//         .should('be.visible')
//         .click()
//     })

     it('B', () => {
         cy.visit('https://api.toodledo.com/3/account/authorize.php?response_type=code&client_id=toodledid&state=false&scope=basic%20tasks%20write')
         cy.get('#email')
         .should('be.visible')
         .type(Cypress.env('email'))
//          .type($EMAIL)
//          .type(process.env.EMAIL)
//          .type(env.EMAIL)
         cy.get('input[type="password"]')
         .should('be.visible')
         .type(Cypress.env('password'))
//          .type(process.env.PASSWORD)
//          .type($PASSWORD)
         cy.get('input[name="authorized"]')
         .should('be.visible')
         .click()
         cy.url().should(
      'be.equal',
      'https://toodledid.herokuapp.com/profile'
    )
//          .then((xhrs) => {
//               cy.log(xhrs)
//               console.log(xhrs[0])
    // xhrs is an array of network call objects
//     expect(xhrs[0], 'first request status').to.have.property('status', 201)
//     expect(xhrs[1], 'second request status').to.have.property('status', 201)
//      })
  })
})
