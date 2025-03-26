//Тест GET 
const axios = require('axios')
const validator = require('jsonschema');
const activitiesSchema1 = require('./schemas/schema-active.json');

describe('Api test', () => {

    test('GET should be able to list of Activities (json schema)', async () => {
        const response = await axios.get("https://fakerestapi.azurewebsites.net/api/v1/Activities")
        
        
        const result = await validator.validate (response.data, activitiesSchema1)
        console.log(result)
        await expect(result.valid).toEqual(false);
      })

     test('GET should be able to list of Activities (status code)', async () => {
      const response = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Activities')
      console.log(response)
      await expect(response.status).toEqual(200);
      await expect(response.data).toBeTruthy();
     })

  test('GET should be able to list of Activities (failed test status code)', async () => {
    const response = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Activities')
    console.log(response)
    await expect(response.status).toEqual(300);
    await expect(response.data).toBeTruthy();
  })


    })