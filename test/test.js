const { suma, resta } = require('../api/utils/utils')

var assert = require('assert');
describe('suma', function () {
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


});