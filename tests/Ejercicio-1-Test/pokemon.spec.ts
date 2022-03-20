import 'mocha';
import { expect } from 'chai';
import {Pokemon} from '../../src/Ejercicio-1/pokemon';

describe('Pruebas para comprobar la clase Pokemon:', () => {
    const Bulbasaur = new Pokemon('Bulbasaur', 6.9, 0.7, 'Planta', [49, 49, 45, 45]);
    it('Test para saber el nombre del pokemon', () => {
        expect(Bulbasaur.getNombre()).to.be.eq('Bulbasaur');
    });

});


