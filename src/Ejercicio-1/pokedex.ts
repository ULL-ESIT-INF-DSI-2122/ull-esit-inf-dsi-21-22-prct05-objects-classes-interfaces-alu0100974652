/**
 * Clase Pokedex
 * @class Pokedex
 * @param nPokemons arrays que contendrá los distintos pokemons de la pokedex
 * @method getPokemonPosition retorna el pokemon en el número de la pokedex
 * @method addPokemon añade un pokemon al final de la pokedex
 * @method searchPokemon busca un pokemon dentro de la pokedex
 */

import { Pokemon } from "./pokemon";

export class Pokedex
{
    private nPokemons: Pokemon[] = [];
    constructor(nPokemons: Pokemon[]) 
    {
        this.nPokemons = nPokemons;
    };

    public getPokemonPosition(position: number)
    {
        return this.nPokemons[position];
    }

    public addPokemon(nuevoPokemon: Pokemon)
    {
        this.nPokemons.push(nuevoPokemon);
    }

    public tamanioPokedex()
    {
        return this.nPokemons.length;
    }

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
}
