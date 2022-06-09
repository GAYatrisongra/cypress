///<reference types="cypress" />

describe('test suite',function(){
 it('test cases',function(){

   cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

      cy.get('#opentab').then(function(el)
      {
        const url=el.prop('href')
      cy.log(url)
})

 })
})


