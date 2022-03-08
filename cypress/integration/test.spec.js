// describe('My First Test', () => {
//     it('B', () => {
//        cy.visit('https://api.toodledo.com/3/account/authorize.php?response_type=code&client_id=toodledid&state=false&scope=basic%20tasks%20write')
//        cy.get('form')
// //        cy.get('input[name="authorized"]')
//   //     .should('be.visible')
//          .should('have.attr', 'href')
//          .then((href) => {
//             cy.log(href)
//             cy.request('POST', href, {
//                  email: Cypress.env('email'),
//                  password: Cypress.env('password'),
//             }).then((response) => {
//                  // pull out the location redirect
//                  const loc = response.headers['Location']
//                  cy.log(loc)
//                  cy.log(response)
//             })
//            })
         
//     })
// })


describe('My First Test', () => {
    it('B', () => {
    const url = "https://api.toodledo.com/3/account/authorize.php?signout=1&response_type=code&client_id=toodledid&state=false&scope=basic%20tasks%20write%20folders"

    cy.request('POST', url, {
                 email: Cypress.env('email'),
                 password: Cypress.env('password'),
       }).then((response) => {
             // pull out the location redirect
             const loc = response.headers['Location']
             cy.log(loc)
             cy.log(JSON.stringify(response))
        })
     })
})
