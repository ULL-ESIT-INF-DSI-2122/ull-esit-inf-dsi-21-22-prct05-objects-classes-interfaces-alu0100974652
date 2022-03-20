import 'mocha';
import { expect } from 'chai';
import {Pokemon} from '../../src/Ejercicio-1/pokemon';

describe('Pruebas para comprobar la clase Pokemon:', () => {
    const Bulbasaur = new Pokemon('Bulbasaur', 6.9, 0.7, 'Planta', [49, 49, 45, 45]);
    it('Test para saber el nombre del pokemon', () => {
        expect(Bulbasaur.getNombre()).to.be.eq('Bulbasaur');
    });

    it('Test para saber el peso del pokemon', () => {
        expect(Bulbasaur.getPeso()).to.be.eq(6.9);
    });

    it('Test para saber la altura del pokemon', () => {
        expect(Bulbasaur.getAltura()).to.be.eq(0.7);
    });
    
    it('Test para saber el tipo del pokemon', () => {
        expect(Bulbasaur.getTipo()).to.be.eq('Planta');
    });

    it('Test para saber el ataque del pokemon', () => {
        expect(Bulbasaur.getAtaque()).to.be.eq(49);
    });

    it('Test para saber la defensa del pokemon', () => {
        expect(Bulbasaur.getDefensa()).to.be.eq(49);
    });

    it('Test para saber la velocidad del pokemon', () => {
        expect(Bulbasaur.getVelocidad()).to.be.eq(45);
    });

    it('Test para saber la vida del pokemon', () => {
        expect(Bulbasaur.getVida()).to.be.eq(45);
    });

    const Bulbasaur1 = new Pokemon('Bulbasaur', 6.9, 0.7, 'Planta', [49, 49, 45, 45]);
    Bulbasaur1.setVida(34);
    it('Test para saber la vida del pokemon', () => {
        expect(Bulbasaur1.getVida()).to.be.eq(34);
    });
});


