describe('My First Test', () => {
    it('B', () => {
    const url = "https://api.toodledo.com/3/account/authorize.php?signout=1&response_type=code&client_id=toodledid&state=false&scope=basic%20tasks%20write%20folders"

    
//     const urlRedirects = [];
    
    cy.request({
  method: 'POST',
  url: url, 
  form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
  followRedirect: false, // turn off following redirects
  body: {
                 email: Cypress.env('email'),
                 password: Cypress.env('password'),
  },
}).then((resp) => {
           // redirect status code is 302
           expect(resp.status).to.eq(302)
           expect(resp.redirectedToUrl).to.eq('http://localhost:8082/unauthorized')
         })
        })
    })
