//Тест DELETE 

const axios = require('axios')
const validator = require('jsonschema');
const activitiesSchema = require('./schemas/schema-active.json');

describe('Api test', () => {

    test('DELETE should be able to list of Activities (json schema)', async () => {
        const response = await axios.get("https://fakerestapi.azurewebsites.net/api/v1/Activities/1")
        
        
        const result = await validator.validate (response.data, activitiesSchema)
        console.log(result)
        await expect(result.valid).toEqual(true);
      })


    test('DELETE should be able to list of Activities (status code)', async () => {
        const response = await axios.delete("https://fakerestapi.azurewebsites.net/api/v1/Activities/1")
        console.log(response)
        await expect(response.status).toEqual(200);
     })

    test('DELETE should be able to list of Activities (failed test status code)', async () => {
      const response = await axios.delete("https://fakerestapi.azurewebsites.net/api/v1/Activities/1")
     console.log(response)
    await expect(response.status).toEqual(500);
     })

    })