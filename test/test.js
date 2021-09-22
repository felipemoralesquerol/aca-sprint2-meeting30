const { suma, resta, dividir } = require('../api/utils/utils')

var assert = require('assert');
describe('suma, resta y división', function () {


    describe('#suma', function () {
        it('Suma de 2 + 2 es 4', function () {
            assert.equal(suma(2, 2), 4);
        });

        it('Suma de 2 + 0 es 2', function () {
            assert.equal(suma(2, 0), 2);
        });

    });

    describe('#resta', function () {
        it('Resta de 2 - 2 es 0', function () {
            assert.equal(resta(2, 2), 0);
        });

        it('Resta de 2 - 0 es 2', function () {
            assert.equal(resta(2, 0), 2);
        });

    });

    describe('#división', function () {
        it('División por si mismo (2 / 2) da 1', function () {
            assert.equal(dividir(2, 2), 1);
        });

        it('División por la unidad (4 / 1) da 4', function () {
            assert.equal(dividir(4, 1), 4);
        });

        it('División por cero (4 / 0) da Infinity', function () {
            assert.equal(dividir(4, 0), Infinity);
        });



    });

});