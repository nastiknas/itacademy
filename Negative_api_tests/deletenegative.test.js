const axios = require('axios');

describe('Api test (delete negative)', () => {
    const url = 'https://fakerestapi.azurewebsites.net/api/v1/Activities/1'; 

    test('should return 404 to delete a non-existent resource', async () => {
        try {
            await axios.delete(`${url}/9999`); 
        } catch (error) {
            expect(error.response.status).toBe(404);
        }
    })
});
