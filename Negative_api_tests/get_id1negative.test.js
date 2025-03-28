const axios = require('axios');

describe('Api test (get negative)', () => {
    const url = 'https://fakerestapi.azurewebsites.net/api/v1/Activities/1'; 

    test('returns 404 for non-existent resource', async () => {
        try {
            await axios.get(`${url}/9999`); 
        } catch (error) {
            expect(error.response.status).toBe(404);
        }
    });

    test('returns 404 for invalid request', async () => {
        try {
            await axios.get(`${url}?invalidParam=value`); 
        } catch (error) {
            expect(error.response.status).toBe(400);
        }
    });
});
