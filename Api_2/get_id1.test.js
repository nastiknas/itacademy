//Тест GET 

const axios = require('axios')
const validator = require('jsonschema');
const activitiesSchema1 = require('./schemas/schema-active.json');

describe('Api test', () => {

    test('GET should be able to list of Activities id1 (json schema)', async () => {
        const response = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Activities/1')
        
        
        const result = await validator.validate (response.data, activitiesSchema1)
        console.log(result)
        await expect(result.valid).toEqual(true);
      })

    test('GET should be able to list of Activities id 1 (status code)', async () => {
         const response = await axios.get("https://fakerestapi.azurewebsites.net/api/v1/Activities/1")
          console.log(response)
          await expect(response.status).toEqual(200);
         await expect(response.data).toBeTruthy();
     })

    test('GET should be able to list of Activities id 1 (failed test status code)', async () => {
          const response = await axios.get("https://fakerestapi.azurewebsites.net/api/v1/Activities/1")
          console.log(response)
          await expect(response.status).toEqual(100);
          await expect(response.data).toBeTruthy();
     })

    })
