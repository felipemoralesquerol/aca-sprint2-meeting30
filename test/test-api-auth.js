require('dotenv').config();
const assert = require('chai').assert;
const fetch = require('node-fetch')
const urlAPI = 'http://localhost:' + process.env.WEB_PORT + '/api';


describe("Probando API Auth", () => {

    it("1.API responde 403 (sin token)", async () => {
        await fetch(urlAPI + '/me')
            .then(response => {
                //console.log(response.status)
                assert.equal(response.status, 403);
            })
    });

    it("2.API include text me", async () => {
        await fetch(urlAPI + '/me')
            .then(response => response.json())
            .then(json => {
                //console.log(json)
                assert.deepEqual(json, { "status": "Acceso denegado" });
            })
    });

    it("3.API signin and me OK", async () => {
        let response = await fetch(urlAPI + '/signin', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                "usuario": "felipe",
                "password": "1234",
                "email": "felipe.morales.querol@gmail.com"
            })
        });
        let json = await response.json();
        token = json.token;
        //console.log(json.status)
        assert.deepEqual(json.status, "signin", 'Se espera status: "signin"');
        assert.exists(token, 'Se espera un token en la respuesta');

        response = await fetch(urlAPI + '/me', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            method: "GET"
        });
        json = await response.json();
        //console.log(json)
        assert.deepEqual(json.status, "me", 'Se espera status: "me"');
        assert.exists(json.data, 'Se espera la clave data en la respuesta');
        assert.deepEqual(json.data.usuario, "felipe", "Se espera el usuario felipe")
    });

    it("4.API signin denied", async () => {
        let response = await fetch(urlAPI + '/signin', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                "usuario": "felipe",
                "password": "otraclavecualquiera",
                "email": "felipe.morales.querol@gmail.com"
            })
        });
        let json = await response.json();
        token = json.token;
        //console.log(json);
        assert.equal(response.status, 401);
        assert.notDeepEqual(json.status, "'Error de credenciales. Acceso denegado'", 'Se espera status: "Error de credenciales. Acceso denegado"');
        assert.notExists(token, 'Se espera un token en la respuesta');

    });

});
