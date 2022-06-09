///<reference types="cypress" />
//import cypress from 'cypress';
import homepage from '../e2e/pageobject/homepage.cy.js';
import ProductPage from '../e2e/pageobject/ProductPage.cy.js';



describe('test suite',function() {

before(function(){
 cy.fixture('example').then(function(data)
 {
this.data=data  

  })
  })
  it('test cases',function() {

  const Homepage= new homepage()    // this is the object for the class
  const productpage= new ProductPage()

  cy.visit(Cypress.env('baseurl'))  //the url is mentioned in cypress.config

  Homepage.getEditbox().type(this.data.name)
  Homepage.getGender().select(this.data.gender)
  Homepage.getTwoWayDataBinding().should('have.value',this.data.name)
       
      //checking minimum length property in name field
      
  Homepage.getEditbox().should('have.attr','minlength','2')
  Homepage.getEntrepreneurButton().should('be.disabled')
      
  Homepage.getShopTab().click()

      //this.data.productName using fixtures(example.json file)

  this.data.productName.forEach(function(element) {
     cy.selectproduct(element) 
  })
     
  productpage.getCheckOutButton().click()
  var sum=0
  cy.get('tr td:nth-child(4) strong').each(($el, index, $list ) => {    // is used for"sum" of two products

    const amount=$el.text()

    var res=amount.split(" ")
    
    res= res[1].trim()

    sum= Number(sum)+Number(res)

   }) .then(function()
  {
  
  cy.log(sum)
  })
  cy.get('h3 strong').then(function(element)
  {
    
    const amount=element.text()

    var res=amount.split(" ")
    
    var total= res[1].trim()
    expect(Number(total)).to.equal(sum)

  })
  cy.contains('Checkout').click()
  cy.get('#country').type('India')
  cy.get('.suggestions > ul > li > a').click()
  cy.get('#checkbox2').click( {force: true})
  cy.get('input[type="submit"]').click()
  //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
  cy.get('.alert').then(function(element)
   {
     const actualText=element.text()
    expect(actualText.includes("Success")).to.be.true
  

  
  })
})    

})
