import 'mocha';
import { expect } from 'chai';
import { Ficha } from '../../src/Ejercicio-2/ficha';

describe('Pruebas para comprobar la clase Jugador', () => {
    const fichaRoja = new Ficha('R', 1);
    const fichaAmarilla = new Ficha('A', 2);
    const jugadorUno = new Jugador(21, fichaRoja);
    const jugadorDos = new Jugador(21, fichaAmarilla);

    it('Se crean los jugadores con las fichas iniciales = 21', () => {
        expect(jugadorUno.getFichas()).to.be.eq(21);
    });

});