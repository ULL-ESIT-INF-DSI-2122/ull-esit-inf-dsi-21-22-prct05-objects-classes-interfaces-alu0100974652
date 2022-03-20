import 'mocha';
import { expect } from 'chai';
import { Ficha } from '../../src/Ejercicio-2/ficha';

describe('Pruebas para comprobar la clase Ficha', () => {
    const fichaRoja = new Ficha('R', 1);
    const fichaAmarilla = new Ficha('A', 2);

    it('Para cada ficha existe un color', () => {
        expect(fichaRoja.getColor()).to.be.eq('R');
        expect(fichaAmarilla.getColor()).to.be.eq('A');
    });

});