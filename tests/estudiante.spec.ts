import 'mocha';
import {expect} from 'chai';
import {Estudiante} from '../src/estudiante';

describe('Pruebas para la clase estudiante', () => {
    const Estudiante = new Estudiante('Pepe', 'Papa Pipi', '12-12-1980', 'Masculino','aluxxxxxx@ull.edu.es');
    const nombreEstudiante = estudiante.getNombre();
    it("Test para el getter del Nombre", () => {
        expect(nombreEstudiante).to.be.equal('Pepe');
    });

});