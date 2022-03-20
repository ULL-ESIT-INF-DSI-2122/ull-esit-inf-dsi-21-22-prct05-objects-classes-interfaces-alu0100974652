/**
 * Clase Pokedex
 * @class Pokedex
 * 
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
}
