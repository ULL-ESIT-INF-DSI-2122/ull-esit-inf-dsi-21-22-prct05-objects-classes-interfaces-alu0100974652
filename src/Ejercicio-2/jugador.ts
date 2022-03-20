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

    public getFichas()
    {
        return this.nFichas;
    }
}