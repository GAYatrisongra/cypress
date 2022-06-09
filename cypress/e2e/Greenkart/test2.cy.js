
describe('my second test suite', function() {

    
    it('my second test case', function() {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('.products').find('.product').eq(0).contains('ADD TO CART').click() 

        cy.get('.products').find('.product').each(($el, index, $list ) => {
        const textVeg=$el.find('h4.product-name').text()
        if(textVeg.includes('Cauliflower'))
       {
        ($el).find('button').click()
       }
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
         cy.contains('Place Order').click()
      })
         
      })

    })
