export class Ficha 
{
    private color: string;

    /**
     * Constructor de una ficha
     * @param columna Determina la columna de la ficha
     * columna: number
     */
    constructor(color: string)
    {
        this.color = color;
    }

    /**
     * Getter de color de ficha
     * @returns Retorna el color de la ficha
     */
    public getColor()
    {
        return this.color;
    }

}