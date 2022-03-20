/**
 * Clase Estudiante 
 * @class Estudiante
 * @param correoInst correo institucional
 * @method getCorreo getter de correo institucional
 * @method setCorreo setter de correo institucional
 */
import {Persona} from './persona';

export class Estudiante extends Persona 
{
    private correoInst: string;

    constructor(nombre: string, apellidos: string, fechaNacimiento: string,
    genero: string, correoInst: string) {
        super(nombre, apellidos, fechaNacimiento, genero);
        this.correoInst = correoInst;
    };

    public getCorreo()
    {
        return this.correoInst;
    }

    public setCorreo(correoNuevo: string)
    {
        this.correoInst = correoNuevo;
    }
}