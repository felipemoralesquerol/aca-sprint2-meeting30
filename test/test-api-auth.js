const assert = require('chai').assert;
const fetch = require('node-fetch')
const urlAPI = 'http://localhost:3000/api';

describe("Probando API Auth", () => {

    it("API responde 200", async () => {
        await fetch(urlAPI + '/me')
            .then(response => {
                console.log(response.status)
                assert.equal(response.status, 200);
            })
    });

    // it("API include key status", async () => {
    //     await fetch('http://localhost:3000/api/me')
    //         .then(response => response.json())
    //         .then(json => {
    //             expect(json).includes("status", "Status");
    //         })
    // });

    it("API include text me", async () => {
        await fetch('http://localhost:3000/api/me')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                assert.deepEqual(json, { "status": "me" });
            })
    });

});
