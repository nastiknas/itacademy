
//Тест GET json schema

const axios = require('axios')
const validator = require('jsonschema');
const activitiesSchema1 = require('./schemas/get1-active.json');

describe('Api test', () => {

    test('GET should be able to list of Activities id1 (json schema)', async () => {
        const response = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Activities/1')
        
        
        const result = await validator.validate (response.data, activitiesSchema1)
        console.log(result)
        await expect(result.valid).toEqual(true);
      })
    })

