

describe('PUT call',()=>{

    it('Put',()=>{
        const reqBody3={
            name: "freddy",
            email: Math.random().toString(4).substring(2,10)+'@gmail.com'
            }

            cy.request({
                  method:'PUT',
                  url:'https://gorest.co.in/public/v2/users/7033556',failOnStatusCode: false,
                  headers:{
                    Authorization : 'Bearer 2cfdebbad5c7fca79181d4fe602d81bebed2f680794ca1f9322ef18c3826f339'

                  },
                  body: reqBody3

            }).then((response)=>{
                cy.log(JSON.stringify(response))
                expect(response.status).to.eq(202)
                expect(response.body).has.property('name',reqBody3.name)
                expect(response.body).has.property('email',reqBody3.email)




            })





    })
})