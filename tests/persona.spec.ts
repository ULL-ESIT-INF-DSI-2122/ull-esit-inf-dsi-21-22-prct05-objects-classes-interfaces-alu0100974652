import 'mocha';
import {expect} from 'chai';
import {Persona} from '../src/persona';

describe('Pruebas para la clase persona getNombre', () => {
    const persona = new Persona('Pepe', 'Papa Pipi', '12-12-1980', 'Masculino');
    const nombrePersona = persona.getNombre();
    expect(nombrePersona).to.be.equal('Pepe');
});

describe('Pruebas para la calse persona getApellidos', () => {
    const persona = new Persona('Pepe', 'Papa Pipi', '12-12-1980', 'Masculino');
    const apellidosPersona = persona.getApellidos();
    expect(apellidosPersona).to.be.equal('Papa Pipi');
})
