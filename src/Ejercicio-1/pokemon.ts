/**
 * Clase Pokemon que representa un pokemon
 * @class Pokemon 
 * @param nombre atributo nombre de la clase
 * @param peso atributo peso del pokemon
 * @param altura atributo altura del pokemon
 * @param tipo atributo tipo del pokemon
 * @param estadisticasBasicas atributo de estadísticas básicas en array (ataque, defensa, velocidad y vida)
 * @method getNombre metodo que devuelve el nombre del pokemon
 * @method getPeso metodo que devuelve el peso del pokemon
 * @method getAltura metodo que devuelve la altura del pokemon
 * @method getTipo metodo que devuelve el tipo del pokemon
 * @method getAtaque metodo que devuelve el ataque del pokemon
 * @method getDefensa metodo que devuelve la defensa del pokemon
 * @method getVelocidad metodo que devuelve la velocidad del pokemon
 * @method getVida metodo que devuelve la vida del pokemon
 * @method setVida metodo que cambia el valor del atributo vida del pokemon
 */

export class Pokemon
{
    private nombre: string;
    private peso: number;
    private altura: number;
    private tipo: string;
    private estadisticasBasicas = Array(4);

    constructor(nombre :string, peso :number, altura: number, tipo: string, estadisticasBasicas: number[]) 
    {
        this.nombre = nombre;
        this.peso = peso;
        this.altura = altura;
        this.tipo = tipo;
        this.estadisticasBasicas = estadisticasBasicas;
    }

    public getNombre()
    {
        return this.nombre;
    }

    public getPeso()
    {
        return this.peso;
    }

    public getAltura()
    {
        return this.altura;
    }

    public getTipo()
    {
        return this.tipo;
    }

    public getAtaque()
    {
        return this.estadisticasBasicas[0];
    }

    public getDefensa()
    {
        return this.estadisticasBasicas[1];
    }

    public getVelocidad()
    {
        return this.estadisticasBasicas[2];
    }

    public getVida()
    {
        return this.estadisticasBasicas[3];
    }

    public setVida(vida: number)
    {
        this.estadisticasBasicas[3] = vida;
    }
}