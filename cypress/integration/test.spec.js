// describe('My First Test', () => {
//     it('B', () => {
//     const url = "https://api.toodledo.com/3/account/authorize.php?signout=1&response_type=code&client_id=toodledid&state=false&scope=basic%20tasks%20write%20folders"

    
// //     const urlRedirects = [];
    
//     cy.request({
//   method: 'POST',
//   url: url, 
//   form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
//   followRedirect: false, // turn off following redirects
//   body: {
//                  email: Cypress.env('email'),
//                  pass: Cypress.env('password'),
//   },
// }).then((resp) => {
//            // redirect status code is 302
//            expect(resp.status).to.eq(302)
//            expect(resp.redirectedToUrl).to.eq('http://localhost:8082/unauthorized')
//          })
//         })
//     })


describe('My First Test', () => {

    it('B', () => {
         cy.visit('https://api.toodledo.com/3/account/authorize.php?response_type=code&client_id=toodledid&state=false&scope=basic%20tasks%20write')
         cy.get('#email')
          .should('be.visible')
          .type(Cypress.env('email'))

          cy.get('input[type="password"]')
            .should('be.visible')
            .type(Cypress.env('password'))

          cy.get('form').submit()
          cy.log(cy.url())
//         cy.url().should('be.equal', 'https://example.com/login')
//           cy.get('input[name="authorized"]')
//           .should('be.visible')
// //          .click()
//          .then((xhrs) => {
    }) 

})
//          cy.visit('https://api.toodledo.com/3/account/authorize.php?response_type=code&client_id=toodledid&state=false&scope=basic%20tasks%20write')
//          cy.get('#email')
//          .should('be.visible')
//          .type(Cypress.env('email'))
// //          .type($EMAIL)
// //          .type(process.env.EMAIL)
// //          .type(env.EMAIL)
//          cy.get('input[type="password"]')
//          .should('be.visible')
//          .type(Cypress.env('password'))
// //          .type(process.env.PASSWORD)
// //          .type($PASSWORD)
//          cy.get('input[name="authorized"]')
//          .should('be.visible')
//          .click()
//          .then((xhrs) => {
//               cy.log(xhrs)
// //               console.log(xhrs[0])
//     // xhrs is an array of network call objects
// //     expect(xhrs[0], 'first request status').to.have.property('status', 201)
// //     expect(xhrs[1], 'second request status').to.have.property('status', 201)
//      })
//   })
// })
