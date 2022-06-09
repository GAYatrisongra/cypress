

describe("test contact us form via webdriverUni", () => {
 it("should be able to able to submit a successful submission via contact us form", () => {
   cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
   //cy.get('#contact-us').click()
   cy.get('[name="first_name"]').type('akia')
   cy.get('[name="last_name"]').type('lama')
   cy.get('[name="email"]').type('akialama1@gmail.com')
   cy.get('textarea.feedback-input').type('how can i learn')
   cy.get('[type="submit"]').click()
  })
  it("should not be able to submit a successful submission via contact us form as all fields are required", () => {
   cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
   cy.get('[name="first_name"]').type('akia')
   cy.get('[name="last_name"]').type('lama')
   cy.get('textarea.feedback-input').type('how can i learn')
   cy.get('[type="submit"]').click()
 })

 
})    
