import 'mocha';
import {expect} from 'chai';
import {Persona} from '../src/persona';

describe('Pruebas para la clase persona getNombre', () => {
    let persona = new Persona('Pepe', 'Papa Pipi', '12-12-1980', 'Masculino');
    expect(persona.getNombre()).to.be.equal('Pepe');

});

