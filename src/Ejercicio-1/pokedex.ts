/**
 * Clase Pokedex
 * @class Pokedex
 */

import { Pokemon } from "./pokemon";

export class Pokedex
{
    /**
     * Atributos de la clase Pokedex
     *      Arrays de Pokemons
     */
    private nPokemons: Pokemon[] = [];

    /**
     * Constructor de la Pokedex
     * @param nPokemons arrays con los pokemons
     */
    constructor(nPokemons: Pokemon[]) 
    {
        this.nPokemons = nPokemons;
    };

    /**
     * Getter de la pokedex para una posición
     * @param position posición de la pokedex a comprobar
     * @returns retorna el pokemon en esa posición
     */
    public getPokemonPosition(position: number)
    {
        return this.nPokemons[position];
    }

    /**
     * Añade un pokemon nuevo en la pokedex
     * @param nuevoPokemon pokemon a añadir a la pokedex
     */
    public addPokemon(nuevoPokemon: Pokemon)
    {
        this.nPokemons.push(nuevoPokemon);
    }

    /**
     * Tamaño de la pokedex
     * @returns Retorna el tamaño de la pokedex [numero de pokemons dentro]
     */
    public tamanioPokedex()
    {
        return this.nPokemons.length;
    }

    /**
     * Busca un pokemon en la pokedex
     * @param buscarPokemon busca un pokemon en concreto a través de un booleano
     * @returns true si lo encuentra y false si no lo encuentra
     */
    public searchPokemon(buscarPokemon: Pokemon)
    {
        let encontrado :Boolean = false;

        for(let i = 0; i < this.nPokemons.length; i++)
        {
            if(buscarPokemon == this.nPokemons[i])
            {
                encontrado = true;
            }
        }
        return encontrado;
    }

    /**
     * Elimina un pokemon de la pokedex
     * @param eliminarPokemon elimina un pokemon de la pokedex utilizando el metodo searchPokemon()
     */
    public deletePokemon(eliminarPokemon: Pokemon)
    {
        if(this.searchPokemon(eliminarPokemon))
        {
            for(let i = 0; i < this.nPokemons.length; i++)
            {
                if(eliminarPokemon == this.nPokemons[i])
                {
                    this.nPokemons.splice(i,1);
                }
            }
        }
    }
}
