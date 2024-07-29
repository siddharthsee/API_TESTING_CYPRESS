import Login from "../../PageObject/login"
import Alert from "../../PageObject/page"
import example from "../fixtures/example.json"
import Hero from "../../PageObject/heroku"


const ln= new Alert()
const goku= new Login()
const hero= new Hero()
example.em=Math.random().toString(4).substring(2,10)+'@gmail.com'


describe('Page Object Model',()=>{
beforeEach(() => {
        // Disable CAPTCHA for the duration of the test
        cy.intercept('POST', '/your/captcha/endpoint', (req) => {
          req.reply({ captchaPassed: true });
        });
      });
 

    it('Page Object Model for various alert pop-ups',()=>{
        ln.visitUrl()
        ln.practice1('I am an alert box!')
        ln.alertWithOk('Press a Button !').should('have.text','You Pressed Cancel')
        ln.alertWithText('Siddharth').should('have.text','Hello Siddharth How are you today')
     })



     it('Login & Sign-up',()=>{
        goku.visitUrl(example.url)
        goku.search(example.int)
        goku.submit()
        goku.addToCart()
        goku.addToCartAgain()
        goku.shoppingCart()
        goku.verifyTotalAmt().contains('$3,600.00')  
        goku.termsAndServic()
        goku.checkOut().should('be.visible')
     })

     it.only('Heroku App',()=>{
        
        hero.visitSite(example.url1)
        hero.firstName(example.name1)
        hero.lastName(example.lastName)
        hero.emailAddress(example.em)
        hero.companyName(example.company)
        hero.role('Professional Developer').should('have.value','professional_developer')
        hero.country(example.country).should('have.value','India')
        hero.language('Go').should('have.value','go')
        hero.checkIt()
        hero.checkRobot()
        hero.submit().should('be.visible')




     })




})