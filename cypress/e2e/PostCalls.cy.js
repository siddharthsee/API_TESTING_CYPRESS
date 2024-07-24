import post from "../fixtures/post.json"


describe('Various post calls', () => { 
  it('post 1', () => { 
    const reqBody={
      name: Math.random().toString(2).substring(2,12)+'SID',
      data: { 

          year: 2019,
          price: 1849.99,
          CPU_model: "Intel Core i9",
          Hard_disk_size: "1 TB"

            }
    }
   // post.name=Math.random().toString(2).substring(2,12)+'SID'
    cy.request({
        method:'POST',
        url:'https://api.restful-api.dev/objects',
        body:reqBody
    }).then((response)=>{
      cy.log(JSON.stringify(response))
      expect(response.status).to.eq(200)
      expect(response.body.name).to.eq(reqBody.name)
      expect(response.body.data.year).to.eq(reqBody.data.year)
      expect(response.body.data.price).to.eq(1849.99)
      expect(response.body.data.CPU_model).to.eq(reqBody.data.CPU_model)

      expect(response.body).has.property('name',reqBody.name)
      
      


    })
    
  })
})