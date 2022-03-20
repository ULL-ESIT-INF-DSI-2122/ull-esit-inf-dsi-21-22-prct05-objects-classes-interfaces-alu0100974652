import { Ficha } from "./ficha";

export class Jugador 
{
    private nFichas: number = 21;
    private fichaJugador: Ficha;

    /**
     * Constructor de la clase Jugador
     * @param nFichas Determina el número de fichas del jugador 21 inicialmente
     * @param fichaJugador Objeto Ficha para la clase Jugador
     */
    constructor(nFichas: number, fichaJugador: Ficha)
    {
        this.nFichas = nFichas;
        this.fichaJugador = fichaJugador;
    }

    /**
     * Getter de fichas
     * @returns Devuelve el número de fichas
     */
    public getFichas()
    {
        return this.nFichas;
    }

    /**
     * Setter de fichas
     * @param actualizarFichas Cambia el valor del número de fichas
     */
    public setFichas(actualizarFichas: number)
    {
        this.nFichas = actualizarFichas;
    }
}