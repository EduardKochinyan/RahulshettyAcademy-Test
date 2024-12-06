describe('Test RahulshettyAcademy', ()=>{
    it('Test RahulshettyAcademy functionality', ()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/ ');
        cy.get('[placeholder="Search for Vegetables and Fruits"]').type('Brocolli');
        cy.get('.products').should('contain.text', 'Brocolli');
        cy.get('.product .quantity').should('contain.value', 1);

        cy.get('[class="increment"]').click().click();
        cy.get('.quantity').should('have.value', 3);

        cy.get('button[type="button"]').contains('ADD TO CART').click();
        cy.get('button[type="button"]').contains('ADDED').should('be.visible');

        cy.get('[alt="Cart"]').click();
        cy.get('.cart-preview .cart-items').contains('Brocolli').should('be.visible');

        cy.get('button[type="button"]').contains('PROCEED TO CHECKOUT').click();
        cy.get('.product-name').contains('Brocolli').should('be.visible');

        cy.get('[placeholder="Enter promo code"]').type('Test');
        cy.get('[class="promoBtn"]').click();
        cy.wait(7000);
        cy.get('.promoInfo').should('contain.text', 'Invalid code ..!');

        cy.get('button').last().click();
        cy.get('select').select('Armenia');
        cy.get('.chkAgree').check();
        cy.get('button').click();
        cy.get('.wrapperTwo').contains('Thank you').should('be.visible');







    })


})