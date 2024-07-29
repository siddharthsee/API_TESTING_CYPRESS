//import { expect } from "chai";



// describe('My Practice Test', () => {

//     // beforeEach('open website',()=>{
//     //      cy.visit('https://demo.automationtesting.in/Alerts.html')
//     // })
    

//     it('Practice', () => {
    
//         cy.get('[class="btn btn-danger"]').click()
//         cy.on('window:alert',(t)=>{
//             expect(t).to.contains('I am an alert box!')
//         })
//      })


//      it('alert with ok',()=>{
//         cy.get('[class="analystic"]').eq(1).click()
//         cy.get('[class="btn btn-primary"]').click()
//         cy.on('window:alert',(t)=>{
//             expect(t).to.contain('Press a Button !')

//         })
//         cy.on('window:confirm',()=>false)
//         cy.get('[id="demo"]').should('have.text','You Pressed Cancel')
//       })


//      it('alert with text',()=>{

//         cy.get('[class="analystic"]').eq(2).click()
//         cy.get('[class="btn btn-info"]').click()
//         cy.window().then((t)=>{
//         cy.stub(t,'prompt').returns('Siddharth')
//                               })

//         cy.get('[id="demo1"]').should('have.text','Hello Siddharth How are you today')
      
//      })



//   })