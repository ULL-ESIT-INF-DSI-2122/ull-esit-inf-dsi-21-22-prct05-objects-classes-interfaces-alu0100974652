import 'mocha';
import {expect} from 'chai';
import {Estudiante} from '../src/estudiante';

describe('Pruebas para la clase estudiante', () => {
    const estudiante = new Estudiante('Pepe', 'Papa Pipi', '12-12-1980', 'Masculino','aluxxxxxx@ull.edu.es');
    const nombreEstudiante = estudiante.getNombre();
    it("Test para el getter del Nombre", () => {
        expect(nombreEstudiante).to.be.equal('Pepe');
    });

    it("Test para el getter del Correo Institucional", () => {
        expect(estudiante.getCorreo()).to.be.equal('aluxxxxxx@ull.edu.es');
    });

    estudiante.setCorreo('estudiante@ull.es');
    it("Test para el setter del Correo Institucional", () => {
        expect(estudiante.getCorreo()).to.be.equal('estudiante@ull.es');
    });

});