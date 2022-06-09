
describe('my first test suite', function() {

    
    it('my first test case', function() {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        
        cy.get('.search-keyword').type('ca')
        cy.get('.products').find('.product').eq(0).contains('ADD TO CART').click()
        cy.get('.products').find('.product').each(($el, index, $list ) => {
        const textVeg=$el.find('h4.product-name').text()
        if(textVeg.includes('Cauliflower'))
       {
        cy.wrap($el).find('button').click()
       }
        cy.get('.brand').then(function(logoelement)
        {
          cy.log(logoelement.text())
          const logo=cy.get('.brand')

        })
  
      })

})
})