
//Тест POST json schema

const axios = require('axios')
const validator = require('jsonschema');
const activitiesSchema = require('./schemas/post-activ-id1.json');

describe('Api test', () => {

  
  test('POST should be able to list of Activities (json schema)', async () => {
    const response = await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Activities',
      {
        "id": 0,
        "title": "string",
        "dueDate": "2025-03-19T20:53:08.691Z",
        "completed": true
      })


    const result = await validator.validate (response.data, activitiesSchema)
    console.log(result)
        await expect(result.valid).toEqual(true);
  })
})


