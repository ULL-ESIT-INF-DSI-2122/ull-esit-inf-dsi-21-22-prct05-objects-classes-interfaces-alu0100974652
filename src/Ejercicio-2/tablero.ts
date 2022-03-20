import { Ficha } from "./ficha";

export class Tablero 
{
    private filas: number = 6;
    private columna: number = 7;
    private tableror: number[][];

    constructor(filas: number, columna: number, tableror: number[][])
    {
        this.columna = columna;
        this.filas = filas;
        this.tableror = tableror;
    }

    public showTablero()
    {
        for(let i: number = 0; i < this.filas; i++)
            for(let j: number = 0; j < this.columna; j++)
                console.log()
    }
}