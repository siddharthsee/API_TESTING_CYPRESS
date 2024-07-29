class Hero{

    visitSite(url){
        cy.visit(url)
    }

    firstName(name){
        cy.get('[name="first_name"]').type(name)
    }


    lastName(lname){
        cy.get('[name="last_name"]').type(lname)
    }


    emailAddress(email){
        cy.get('[name="email"]').type(email)
    }

    companyName(nnn){
        cy.get('[name="company"]').type(nnn)
    }

    role(Role){
       return cy.get('[name="role"]').select(Role)
    }

    country(coun){
       return cy.get('[id="self_declared_country"]').select(coun)
    }

    language(lang){
      return cy.get('[id="main_programming_language"]').select(lang)
    }
    checkIt(){
        cy.get('[name="receive_newsletter"]').check()
    }

    checkRobot(){
        cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click()
    }
    submit(){
        cy.get('[name="commit"]').click()
        return cy.contains('We could')
    }













}
export default Hero