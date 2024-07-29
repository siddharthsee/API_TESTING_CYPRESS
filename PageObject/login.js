class Login{

    visitUrl(url){
        cy.visit(url)
    }


    search(type){
        cy.get('[type="text"]').type(type).click()
    }


    submit(){
        cy.get('[type="submit"]').click()
    }


    addToCart(){
        cy.get('.button-2.product-box-add-to-cart-button').click() 
    }

    addToCartAgain(){
        cy.get('#add-to-cart-button-4').eq(0).click({force:true}) 
    }



    shoppingCart(){
        cy.get('.cart-label').click() 
    }


    verifyTotalAmt(){
        return cy.get('.value-summary > strong')
    }

    termsAndServic(){
       cy.get("#termsofservice").check()
    }

    checkOut(){
        cy.get('[id="checkout"]').click()
        return cy.contains('Welcome,')
    }

}
export default Login