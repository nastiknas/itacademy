const axios = require('axios');

describe('Api test (post negative)', () => {
    const url = 'https://fakerestapi.azurewebsites.net/api/v1/Activities';

    test('returns 400 for invalid data', async () => {
        const invalidData = { name: '' }; 

        try {
            await axios.post(url, invalidData);
        } catch (error) {
            expect(error.response.status).toBe(400);
            expect(error.response.data.message).toMatch(/invalid/i); 
        }
    });
});