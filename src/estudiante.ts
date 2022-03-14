import {Persona} from './persona';

export class Estudiante extends Persona 
{
    private correoInst: string;

    constructor(nombre: string, apellidos: string, fechaNacimiento: string,
    genero: string, correoInst: string) {
        super(nombre, apellidos, fechaNacimiento, genero);
        this.correoInst = correoInst;
    };
}