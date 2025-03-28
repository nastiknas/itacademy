const axios = require('axios');

describe('Api test (put negative)', () => {
    const url = 'https://fakerestapi.azurewebsites.net/api/v1/Activities/1'; 

    test('returns 404 for non-existent resource', async () => {
        const updatedData = { name: 'Новое Имя' };

        try {
            await axios.put(url, updatedData);
        } catch (error) {
            expect(error.response.status).toBe(404);
            expect(error.response.data.message).toMatch(/not found/i); 
        }
    });

    test('returns 404 for invalid request', async () => {
        const invalidData = { name: '' }; 

        try {
            await axios.put(url, invalidData);
        } catch (error) {
            expect(error.response.status).toBe(400);
            expect(error.response.data.message).toMatch(/invalid/i); 
        }
    });
});