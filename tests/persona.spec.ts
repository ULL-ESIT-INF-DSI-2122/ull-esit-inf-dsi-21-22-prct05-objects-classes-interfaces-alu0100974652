import 'mocha';
import {expect} from 'chai';
import {Persona} from '../src/persona';

describe('Pruebas para la clase persona getNombre', () => {
    const persona = new Persona('Pepe', 'Papa Pipi', '12-12-1980', 'Masculino');
    const nombrePersona = persona.getNombre();
    expect(nombrePersona).to.be.equal('Pepe');

});

