//import { describe } from "mocha";

//import { expect } from "chai"

describe('delete api',()=>{
    function generateRandomEmail() {
        const randomString = Math.random().toString(36).substring(2, 10)
        const email = randomString + "@dispostable.com"
        return email
    }

    it('delete user',()=>{
        let emailAddress = generateRandomEmail()
        let reqBody = {
            "name": "AB Test 01",
            "email": emailAddress,
            "gender": "female",
            "status": "active"
        }
        

        cy.request({
            method:'POST',
            url:'https://gorest.co.in/public/v2/users',
            headers:{
                Authorization: 'Bearer 2cfdebbad5c7fca79181d4fe602d81bebed2f680794ca1f9322ef18c3826f339'
            },
            body: reqBody


        }).then((response)=>{
            const id = response.body.id

            cy.request({
                  method:'DELETE',
                  url:'https://gorest.co.in/public/v2/users/'+ id,
                  headers:{
                    Authorization: 'Bearer 2cfdebbad5c7fca79181d4fe602d81bebed2f680794ca1f9322ef18c3826f339'
                },
                body:reqBody
            }).then((response)=>{

                expect(response.status).to.be.equal(204)


                cy.request({
                      method:'GET',
                      url:'https://gorest.co.in/public/v2/users/'+ id,failOnStatusCode: false,

                      headers:{
                        Authorization: 'Bearer 2cfdebbad5c7fca79181d4fe602d81bebed2f680794ca1f9322ef18c3826f339'
                    },
                }).then((response)=>{
                    expect(response.status).to.eq(404)



                })



            })


        })







    })
})