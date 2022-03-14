import 'mocha';
import {expect} from 'chai';
import {Persona} from '../src/persona';

describe('Pruebas para la clase persona', () => {
    const persona = new Persona('Pepe', 'Papa Pipi', '12-12-1980', 'Masculino');
    const nombrePersona = persona.getNombre();
    it("Test para el getter del Nombre", () => {
        expect(nombrePersona).to.be.equal('Pepe');
    });

    const apellidosPersona = persona.getApellidos();
    it("Test para el getter del Apellidos", () => {
        expect(apellidosPersona).to.be.equal('Papa Pipi');
    });

    const fechaPersona = persona.getFechaNacimiento();
    it("Test para el getter del FechaNacimiento", () => {
        expect(fechaPersona).to.be.equal('12-12-1980');
    });

    const generoPersona = persona.getGenero();
    it("Test para el getter del Genero", () => {
        expect(generoPersona).to.be.equal('Masculino');
    });
});
