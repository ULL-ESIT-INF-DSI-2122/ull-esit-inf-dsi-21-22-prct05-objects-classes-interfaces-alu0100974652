export class Ficha 
{
    private color: string;
    private columna: number;

    /**
     * Constructor de una ficha
     * @param color Determina el color de la ficha
     * @param columna Determina la columna de la ficha
     */
    constructor(color: string, columna: number)
    {
        this.color = color;
        this.columna = columna;
    }

    /**
     * Getter de color de ficha
     * @returns Retorna el color de la ficha
     */
    public getColor()
    {
        return this.color;
    }

    /**
     * Getter de columna de ficha
     * @returns Retorna la columna de la ficha
     */
    public getColum()
    {
        return this.columna;
    }
}