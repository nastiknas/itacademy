//Тест DELETE json schema

const axios = require('axios')
const validator = require('jsonschema');
const activitiesSchema = require('./schemas/post-activ-id1.json');

describe('Api test', () => {

    test('DELETE should be able to list of Activities (json schema)', async () => {
        const response = await axios.get("https://fakerestapi.azurewebsites.net/api/v1/Activities/1")
        
        
        const result = await validator.validate (response.data, activitiesSchema)
        console.log(result)
        await expect(result.valid).toEqual(true);
      })
    })


   