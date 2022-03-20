import 'mocha';
import {expect} from 'chai';
import {Estudiante} from '../../src/GrupoPracticas/estudiante';

describe('Pruebas para la clase estudiante', () => {
    const estudiante = new Estudiante('Pepe', 'Papa Pipi', '12-12-1980', 'Masculino','aluxxxxxx@ull.edu.es');
    const nombreEstudiante = estudiante.getNombre();
    it("Test para el getter del Nombre", () => {
        expect(nombreEstudiante).to.be.equal('Pepe');
    });

    const getCorreoEstudiante = estudiante.getCorreo();
    it("Test para el getter del Correo Institucional", () => {
        expect(getCorreoEstudiante).to.be.equal('aluxxxxxx@ull.edu.es');
    });

    //const setCorreoEstudiante = estudiante.setCorreo('estudiante@ull.es');
    //it("Test para el setter del Correo Institucional", () => {
    //    expect(setCorreoEstudiante).to.be.equal('aluxxxxxx@ull.edu.es');
    //});

});