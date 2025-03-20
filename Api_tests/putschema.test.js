//Тест PUT json schema

const axios = require('axios')
const validator = require('jsonschema');
const activitiesSchema = require('./schemas/post-activ-id1.json');

describe('Api test', () => {

  
  test('PUT should be able to list of Activities (json schema)', async () => {
     const response = await axios.put("https://fakerestapi.azurewebsites.net/api/v1/Activities/1",
      {
      
          "id": 0,
          "title": "string",
          "dueDate": "2025-03-20T12:01:03.457Z",
          "completed": true
    
       })

    const result = await validator.validate (response.data, activitiesSchema)
    console.log(result)
        await expect(result.valid).toEqual(true);
  })
})


 