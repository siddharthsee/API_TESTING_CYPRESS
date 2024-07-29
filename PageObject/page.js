class Alert{

  /*-(1)->*/  visitUrl(url){
        cy.visit(Cypress.env('URL'))
    }


  /*-(2)->*/  practice1(monk){

        cy.get('[class="btn btn-danger"]').click()
        cy.on('window:alert',(t)=>{
            expect(t).to.contains(monk)
        })
    }


  /*-(3)->*/  alertWithOk(press){

       cy.get('[class="analystic"]').eq(1).click()
        cy.get('[class="btn btn-primary"]').click()
        cy.on('window:alert',(t)=>{
            expect(t).to.contain(press)

        })
         cy.on('window:confirm',()=>false)
        return   cy.get('[id="demo"]')  
    }


 /*-(4)->*/   alertWithText(name){

        cy.get('[class="analystic"]').eq(2).click()
        cy.get('[class="btn btn-info"]').click()
        cy.window().then((t)=>{
         return   cy.stub(t,'prompt').returns(name)
        })
            
         return cy.get('[id="demo1"]') 
       
    }









}
export default Alert