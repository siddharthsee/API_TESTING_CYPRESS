

import abcd from "../fixtures/abcd.json"

describe('API CALLS',()=>{

    it('Get call',()=>{
        cy.request('GET','https://docs.cypress.io/guides/core-concepts/cypress-app')
        .its('status')
        .should('eq',200)
        })


    it('Post call',()=>{
        cy.request({
            method:'POST',
            url:'https://api.restful-api.dev/objects',failOnStatusCode: false,
            body:{
                name: "Apple MacBook Pro 16",
                data: {
                   year: "2019",
                   price: "1849.99",
                   CPUmodel: "Intel Core i9",
                   Harddisksize: "1 TB"
                }

            }
    })
    .its('status')
    .should('eq',200)

  })  

  it('Put call',()=>{
    cy.request({
         method:'PUT',
         url:'https://api.restful-api.dev/objects/ff80818190afe51a0190b65911790ad5',failOnStatusCode: false,
         body:{
            name: "Apple MacBook Pro 16",
            data: {
         year: 2019,
         price: 2049.99,
         CPU_model: "Intel Core i9",
         Harddisksize: "1 TB",
         color: "silver"
                  }

         }
    }).its('status').should('eq',200)

    })

    it('delete call',()=>{
        cy.request({method:'DELETE',
        url:'https://api.restful-api.dev/objects/ff80818190afe51a0190b65911790ad5',
        failOnStatusCode:false})
        .its('status')
        .should('eq',200)
    })




    it('AB Automation GET call',()=>{
        cy.request({
              method:'GET',
              url:'https://gorest.co.in/public/v2/posts/141493',
            //   body:{
            //          name: "Apple MacBook Pro 16",
            //          data: {
            //           year: 2019,
            //           price: 2049.99,
            //           CPU_model: "Intel Core i9",
            //           Hard_disk_size: "1 TB",
            //           color:"silver"
            //             }
            //   },
              failOnStatusCode: false 
        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.eq(200)
            expect(response.body.id).to.eq(141493)

        })


    })




    it.only('POST new call with fixtures',()=>{
        // const reqBody1={
        //     name:"SID",
        //     email:Math.random().toString(5).substring(2,10)+'@gmail.com' ,
        //     gender:"male",
        //     status:"active"
        // }
        abcd.email=Math.random().toString(5).substring(2,10)+'@gmail.com'
        cy.request({
              method:'POST',
              url:'https://gorest.co.in/public/v2/users',failOnStatusCode: false,
              headers:{
                Authorization : "Bearer 2cfdebbad5c7fca79181d4fe602d81bebed2f680794ca1f9322ef18c3826f339"
              },
              body:abcd
        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.eq(201)
            expect(response.body.name).to.eq(abcd.name)
            expect(response.body).has.property('name',abcd.name)
            expect(response.body).has.property('email',abcd.email)
            expect(response.body).has.property('gender',abcd.gender)
            expect(response.body).has.property('status',abcd.status)





        })






    })
    
    

})