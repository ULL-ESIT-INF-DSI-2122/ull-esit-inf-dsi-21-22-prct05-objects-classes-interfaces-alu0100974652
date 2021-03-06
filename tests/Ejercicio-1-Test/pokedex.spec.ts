import 'mocha';
import { expect } from 'chai';
import { Pokemon } from '../../src/Ejercicio-1/pokemon';
import {Pokedex} from '../../src/Ejercicio-1/pokedex';

describe('Pruebas para comprobar la clase Pokedex:', () => {
    const Bulbasaur = new Pokemon('Bulbasaur', 6.9, 0.7, 'Planta', [49, 49, 45, 45]);
    const Charmander = new Pokemon('Charmander', 8.5, 0.6, 'Fuego', [52,43,65,39]);
    const Squirtle = new Pokemon('Squirtle', 9, 0.5, 'Agua', [46,65,43,44]);
    const Pikachu = new Pokemon('Pikachu',6,0.4,'Electrico',[55,40,90,35]);

    const PokedexKanto = new Pokedex([Bulbasaur, Charmander]);

    it('Comprobando si se puede acceder a la Pokedex', () => {
        expect(PokedexKanto.getPokemonPosition(1)).to.be.eq(Charmander);
    });

    it('Se puede añadir un nuevo Pokeon a la Pokedex', () => {
        PokedexKanto.addPokemon(Squirtle);
        expect(PokedexKanto.getPokemonPosition(2)).to.be.eq(Squirtle);
    });

    it('Se puede buscar un Pokemon en la Pokedex', () => {
        expect(PokedexKanto.searchPokemon(Bulbasaur)).to.be.eq(true);
        expect(PokedexKanto.searchPokemon(Pikachu)).to.be.eq(false);
    });

    it('Se puede eliminar un Pokemon de la Pokedex', () => {
        PokedexKanto.deletePokemon(Bulbasaur);
        expect(PokedexKanto.tamanioPokedex()).to.be.eq(2);
    })

});