//import { expect } from "chai"

//import { expect } from "chai"


describe('Query Param',()=>{

    it('query param',()=>{
        const a= {page:2}

        cy.request({
            method :"GET",
            url:'https://reqres.in/api/users',
            qs: a

        }).then((response)=>{
            expect(JSON.stringify(response))
            expect(response.status).to.eq(200)
            expect(response.body.total_pages).to.eq(2)
            expect(response.body.total).to.eq(12)
            expect(response.body.per_page).to.eq(6)
            expect(response.body.data).has.length(6)
            expect(response.body.data[0]).has.property('id',7)
            
            expect(response.body.data[3]).has.property('id',10)
            expect(response.body.data[3]).has.property('email','byron.fields@reqres.in')
            




        })




    })
})