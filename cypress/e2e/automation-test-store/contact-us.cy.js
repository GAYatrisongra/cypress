

describe("test contact us form via automation test store", () => {

    it.only("should be able to submit a successful submission via contact us form", () => {
      cy.visit("https://automationteststore.com/")
      cy.get('.footerlinks').contains('Contact Us').click()
      cy.get('#ContactUsFrm_first_name').type('shin')
      cy.get('#ContactUsFrm_email').type('shin92@gmail.com')
      cy.get('#ContactUsFrm_enquiry').type('i am learning cypress')
      cy.get('.col-md-6 > .btn').click()
    

    })
   })    
    
   