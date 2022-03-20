import 'mocha';
import { expect } from 'chai';
import { Ficha } from '../../src/Ejercicio-2/ficha';
import { Jugador } from '../../src/Ejercicio-2/jugador';

describe('Pruebas para comprobar la clase Jugador', () => {
    const fichaRoja = new Ficha('R', 1);
    const fichaAmarilla = new Ficha('A', 2);
    const jugadorUno = new Jugador(21, fichaRoja);
    const jugadorDos = new Jugador(21, fichaAmarilla);

    it('Se crean los jugadores con las fichas iniciales = 21', () => {
        expect(jugadorUno.getFichas()).to.be.eq(21);
        expect(jugadorDos.getFichas()).to.be.eq(21);
    });

    it('Se puede actualizar el núemero de fichas de un jugador', () => {
        jugadorUno.setFichas(19);
        expect(jugadorUno.getFichas()).to.be.eq(19);
        jugadorDos.setFichas(15);
        expect(jugadorDos.getFichas()).to.be.eq(15);
    });

    it('Se puede comprobar si existen más movimientos (fichas disponibles)', () => {
        expect(jugadorUno.fichasDisponibles()).to.be.eq(true);
        jugadorDos.setFichas(0);
        expect(jugadorDos.fichasDisponibles()).to.be.eq(false)
    })

});