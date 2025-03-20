//  НЕГАТИВНЫЕ ТЕСТЫ статус код

const axios = require('axios');


describe('Api test', () => {

  test.skip('GET should be able to list of Activities (status code)', async () => {
    const response = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Activities')
    console.log(response)
    await expect(response.status).toEqual(300);
    await expect(response.data).toBeTruthy();
  })

  
  test.skip('POST should be able to list of Activities', async () => {
    const response = await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Activities',
      {
        "id": 0,
        "title": "string",
        "dueDate": "2025-03-19T20:53:08.691Z",
        "completed": true
      })


      console.log(response)
      await expect(response.status).toEqual(400);
      await expect(response.data).toBeTruthy();
  })

  test.skip('GET should be able to list of Activities id 1 (status code)', async () => {
    const response = await axios.get("https://fakerestapi.azurewebsites.net/api/v1/Activities/1")
    console.log(response)
    await expect(response.status).toEqual(100);
    await expect(response.data).toBeTruthy();
  })


  test.skip('PUT should be able to list of Activities', async () => {
   const response = await axios.put("https://fakerestapi.azurewebsites.net/api/v1/Activities/1",
    {
    
        "id": 0,
        "title": "string",
        "dueDate": "2025-03-20T12:01:03.457Z",
        "completed": true
  
     })
     console.log(response)
     await expect(response.status).toEqual(400);
     await expect(response.data).toBeTruthy();
})

test.skip('DELETE should be able to list of Activities', async () => {
  const response = await axios.delete("https://fakerestapi.azurewebsites.net/api/v1/Activities/1",
)
  console.log(response)
  await expect(response.status).toEqual(500);
  })


}); 
