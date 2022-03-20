import { Pokemon } from "./pokemon";

export class Combat
{
    private pokemon1: Pokemon;
    private pokemon2: Pokemon;

    /**
     * Constructor de la clase Combat
     * @param pokemon1 representa un pokemon 
     * @param pokemon2 representa un pokemon 
     */
    constructor(pokemon1: Pokemon, pokemon2: Pokemon) 
    {
        this.pokemon1 = pokemon1;
        this.pokemon2 = pokemon2;
    };

    /**
     * Calcula el daño realizado entre dos pokemons
     * @param tipoPokemonA selecciona el tipo del pokemon
     * @param tipoPokemonB selecciona el tipo del pokemon
     * @param capacidadAtaqueA selecciona daño de ataque del pokemon
     * @param capacidadAtaqueB selecciona daño de ataque del pokemon
     * @returns devuelve el calculo realizado
     */
    calculoDanios(tipoPokemonA: string, tipoPokemonB: string, capacidadAtaqueA: number, capacidadAtaqueB: number)
    {
        let danio = 0;
        let efectividad = 0;

        switch (tipoPokemonA)
        {
            case `Fuego`:
                if (tipoPokemonB = `Planta`)
                {
                    efectividad = 2;
                } else if (tipoPokemonB = `Agua`) 
                {
                    efectividad = 0.5;
                } else efectividad = 1;

                break;
            
            case `Agua`:
                if (tipoPokemonB = `Planta`)
                {
                    efectividad = 0.5;
                } else if (tipoPokemonB = `Fuego`) 
                {
                    efectividad = 2;
                } else efectividad = 2;

                break;

            case `Electrico`:
                if (tipoPokemonB = `Agua`)
                {
                    efectividad = 2;
                } else if (tipoPokemonB = `Fuego`) 
                {
                    efectividad = 1;
                } else efectividad = 1;

                break;
            
            case `Planta`:
            if (tipoPokemonB = `Agua`)
            {
                efectividad = 2;
            } else if (tipoPokemonB = `Agua`) 
            {
                efectividad = 0.5;
            } else efectividad = 1;

            break;

        }

        danio = 50 * (capacidadAtaqueA / capacidadAtaqueB) * efectividad;
        return danio;
    }

    start()
    {

    }
}