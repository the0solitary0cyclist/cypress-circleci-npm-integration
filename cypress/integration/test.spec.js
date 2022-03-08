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

    
    const urlRedirects = [];


    cy.request('POST', url, {
                 email: Cypress.env('email'),
                 password: Cypress.env('password'),
       }).then((response) => {
               cy.on('url:changed', (url) => { urlRedirects.push(url);});
//              cy.location().should((loc) => { // comes up blank
//    expect(loc.pathname.toString()).to.contain('/home');
 });
             // pull out the location redirect
//              const loc = response.headers
//              cy.log(loc)
//              expect(JSON.stringify(response)).to.equal('foo')
        }).then(() => {

      expect(urlRedirects).to.have.length(3);
      expect(urlRedirects[1]).to.eq('foo');
      expect(urlRedirects[2]).to.eq('bar');

    });
     })
})
