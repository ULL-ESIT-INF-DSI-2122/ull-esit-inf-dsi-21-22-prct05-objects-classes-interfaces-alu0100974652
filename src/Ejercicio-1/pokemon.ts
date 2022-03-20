export class Pokemon
{
    /**
     * Atributos de la clase Pokemon
     */
    private nombre: string;
    private peso: number;
    private altura: number;
    private tipo: string;
    private estadisticasBasicas = Array(4);

    /**
     * Constructor de la clase pokemon
     * @param nombre nombre del pokemon
     * @param peso peso del pokemon
     * @param altura altura del pokemon
     * @param tipo tipo del pokemon
     * @param estadisticasBasicas estadisticas basicas del pokemon [ataque, defensa, velocidad, vida]
     */
    constructor(nombre :string, peso :number, altura: number, tipo: string, estadisticasBasicas: number[]) 
    {
        this.nombre = nombre;
        this.peso = peso;
        this.altura = altura;
        this.tipo = tipo;
        this.estadisticasBasicas = estadisticasBasicas;
    }

    /**
     * Getter del nombre del pokemon
     * @returns retorna el nombre del pokemon
     */
    public getNombre()
    {
        return this.nombre;
    }

    /**
     * Getter del peso del pokemon
     * @returns retorna el peso del pokemon
     */
    public getPeso()
    {
        return this.peso;
    }

    /**
     * Getter de la altura del pokemon
     * @returns retorna la altura del pokemon
     */
    public getAltura()
    {
        return this.altura;
    }

    /**
     * Getter del tipo del pokemon
     * @returns retorna el tipo del pokemon
     */
    public getTipo()
    {
        return this.tipo;
    }

    /**
     * Getter del ataque del pokemon
     * @returns retorna el ataque del pokemon
     */
    public getAtaque()
    {
        return this.estadisticasBasicas[0];
    }

    /**
     * Getter de la defensa del pokemon
     * @returns retorna la defensa del pokemon
     */
    public getDefensa()
    {
        return this.estadisticasBasicas[1];
    }

    /**
     * Getter de la velocidad del pokemon
     * @returns retorna la velocidad del pokemon
     */
    public getVelocidad()
    {
        return this.estadisticasBasicas[2];
    }

    /**
     * Getter de la vida
     * @returns retorna la vida del pokemon
     */
    public getVida()
    {
        return this.estadisticasBasicas[3];
    }

    /**
     * Setter de vida del pokemon
     * @param vida cambia el valor del atributo vida del pokemon
     */
    public setVida(vida: number)
    {
        this.estadisticasBasicas[3] = vida;
    }
}