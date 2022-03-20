import 'mocha';
import { expect } from 'chai';
import { Pokemon } from '../../src/Ejercicio-1/pokemon';
import { Combat } from '../../src/Ejercicio-1/combat';

describe('Pruebas para comprobar la clase Combate:', () => {
    const Bulbasaur = new Pokemon('Bulbasaur', 6.9, 0.7, 'Planta', [49, 49, 45, 45]);
    const Charmander = new Pokemon('Charmander', 8.5, 0.6, 'Fuego', [52,43,65,39]);
    const Squirtle = new Pokemon('Squirtle', 9, 0.5, 'Agua', [46,65,43,44]);
    const Pikachu = new Pokemon('Pikachu',6,0.4,'Electrico',[55,40,90,35]);

    it('Comprobar el metodo calculodeDanios', () => {
        const calculoDeDanios = new Combat(Bulbasaur, Squirtle);
        expect(calculoDeDanios.calculoDanios(Bulbasaur.getTipo(), Squirtle.getTipo(), Bulbasaur.getAtaque(), Squirtle.getDefensa())).to.be.eq(75.38461538461539);
    });

    it('Combate Bulbasaur vs Squirtle = Ganador Bulbasaur', () => {
        const primerCombate = new Combat(Bulbasaur, Squirtle);
        expect(primerCombate.start(Bulbasaur, Squirtle)).to.be.eq(Bulbasaur);
    });

    it('Combate Charmander vs Pikachu = Ganador Charmander', () => {
        const segundoCombate = new Combat(Charmander, Pikachu);
        expect(segundoCombate.start(Charmander, Pikachu)).to.be.eq(Charmander);
    });
});