import 'mocha';
import { expect } from 'chai';
import { Pokemon } from '../../src/Ejercicio-1/pokemon';
import {Pokedex} from '../../src/Ejercicio-1/pokedex';

describe('Pruebas para comprobar la clase Pokedex:', () => {
    const Bulbasaur = new Pokemon('Bulbasaur', 6.9, 0.7, 'Planta', [49, 49, 45, 45]);
    const Charmander = new Pokemon('Charmander', 8.5, 0.6, 'Fuego', [52,43,65,39]);
    const Squirtle = new Pokemon('Squirtle', 9, 0.5, 'Agua', [46,65,43,44]);

    const PokedexKanto = new Pokedex([Bulbasaur, Charmander]);

    it('Comprobando si se puede acceder a la Pokedex', () => {
        expect(PokedexKanto).to.be.eq([[Bulbasaur, Charmander]]);
    });

});