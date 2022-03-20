import 'mocha';
import {expect} from 'chai';
import {Persona} from '../../src/GrupoPracticas/persona';

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

    const nuevoNombre = persona.setNombre('Steve');
    it("Test para set Nombre", () => {
        expect(persona.getNombre()).to.be.equal('Steve');
    });

    const nuevoApellidos = persona.setApellidos('Randor Raider');
    it("Test para set Apellidos", () => {
        expect(persona.getApellidos()).to.be.equal('Randor Raider');
    });

    const nuevaFecha = persona.setFecha('08-05-2002');
    it("Test para set Fecha", () => {
        expect(persona.getFechaNacimiento()).to.be.equal('08-05-2002');
    });

    const nuevoGenero = persona.setGenero('Femenino');
    it("Test para set Genero", () => {
        expect(persona.getGenero()).to.be.equal('Femenino');
    });
});
