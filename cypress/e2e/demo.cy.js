 ///<reference types="cypress" />

describe('test suite',function() {
 it('test cases',function(){
     cy.visit("https://opensource-demo.orangehrmlive.com/index.php/dashboard")
     cy.get('#txtUsername').type('Admin')
     cy.get('#txtPassword').type('admin123')
     cy.get('#btnLogin').click()
     cy.get('#menu_admin_viewAdminModule > b').click()
     cy.get('#searchSystemUser_userName').type('gayatri')
     cy.get('#searchSystemUser_userType').select('ESS').should('have.value','2')
     cy.get('#searchSystemUser_employeeName_empName').type('gayatri')
     cy.get('#searchSystemUser_status').select('1')
     cy.get('.searchbutton').click()
     cy.get('#welcome').click()
     cy.get('#welcome-menu > :nth-child(1) > :nth-child(3) > a').click()
     
    
     
    
    


 })


})
    

