export class Ficha 
{
    private color: string;
    private columna: number;

    constructor(color: string, columna: number)
    {
        this.color = color;
        this.columna = columna;
    }

    public getColor()
    {
        return this.color;
    }

    public getColum()
    {
        return this.columna;
    }
}