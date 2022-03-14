/**
 * Clase que representa una persona
 * @class Persona 
 * @param nombre atributo nombre de la clase
 * @param apellidos atributo apellidos de la clase
 * @param fechaNacimiento atributo fecha de nacimiento de la clase
 * @param genero atributo genero de la clase
 * @method getNombre getter del nombre
 * @method getApellidos getter de apellidos
 * @method getFechaNacimiento getter de fecha de nacimiento
 * @method getGenero getter del genero
 */
export class Persona 
{
    private nombre: string;
    private apellidos: string;
    private fechaNacimiento: string;
    private genero: string;

    constructor(nombre: string, apellidos: string, fechaNacimiento: string,
                genero: string) {
                    this.nombre = nombre;
                    this.apellidos = apellidos;
                    this.fechaNacimiento = fechaNacimiento;
                    this.genero = genero;
                }

    public getNombre ()
    {
        return this.nombre;
    }

    public getApellidos ()
    {
        return this.apellidos;
    }

    public getFechaNacimiento ()
    {
        return this.fechaNacimiento;
    }

    public getGenero ()
    {
        return this.genero;
    }



}