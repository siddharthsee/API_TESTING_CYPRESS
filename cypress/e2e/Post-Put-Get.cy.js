import example from "../fixtures/example.json"

describe('Post',()=>{

    it('post',()=>{
        //email= Math.random().toString(4).substring(2,10)+'@gmail.com'
        cy.request({
            method:"POST",
            url:'https://gorest.co.in/public/v2/users',failOnStatusCode: false,
            headers:{
                Authorization : "Bearer 2cfdebbad5c7fca79181d4fe602d81bebed2f680794ca1f9322ef18c3826f339"
            },
            body: {
                
                    name:"freddy",
                    email:Math.random().toString(4).substring(2,10)+'@gmail.com',
                    gender:"male",
                    status:"active"
                
            }
            


        }).then((response)=>{
            let id = response.body.id
            cy.request({ 
                method:"PUT",
                url:'https://gorest.co.in/public/v2/users/'+ id,
                headers:{
                    Authorization : "Bearer 2cfdebbad5c7fca79181d4fe602d81bebed2f680794ca1f9322ef18c3826f339"
                },
                body: {
                    
                           // name:"freddy",
                            email:Math.random().toString(4).substring(2,10)+'@gmail.com'
                    
                      }

            }).then((response)=>{
                expect(response.status).to.eq(200)
                cy.request({
                    method:'GET',
                    url:'https://gorest.co.in/public/v2/users/'+ id,
                    headers:{  
                        
                        Authorization : "Bearer 2cfdebbad5c7fca79181d4fe602d81bebed2f680794ca1f9322ef18c3826f339"
             
                           }
                   
                }).then((response)=>{
                     expect(response.status).to.eq(200)
                     expect(response.body).has.property('name',example.name)  
                })


            })


        })




    })






})