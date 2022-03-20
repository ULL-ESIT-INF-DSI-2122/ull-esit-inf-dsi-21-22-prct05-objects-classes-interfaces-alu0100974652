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

    /**
     * Simula un combate Pokémon
     * @param pokemonA Pokemon para realizar un combate
     * @param pokemonB Pokemon para realizar un combate
     * @returns retorna el Pokemon ganador
     */
    start(pokemonA: Pokemon, pokemonB: Pokemon)
    {
        /** Muestra un mensaje por pantalla de comienzo del combate entre dos pokemons */
        console.log(`El combate entre ${this.pokemon1} vs ${this.pokemon2} está apunto de empezar:`);

        /** Contador de turnos */
        let i: number  = 0;

        /** Pokemons auxiliares para determinar qué Pokémon empieza a atacar */
        let pokemonPrimeroAtacar: Pokemon;
        let pokemonSegundoAtacar: Pokemon;

        /** Pokemon que será el ganador del combate */
        let pokemonGanador: Pokemon;

        /** Variable para el calculo de daños */
        let danio: number = 0;

        /** Determina quien empieza en atacar según la velocidad del Pokémon */
        console.log(`Vamos a conocer quien es el primer Pokémon en empezar en base a su velocidad:`);
        if(pokemonA.getVelocidad() > pokemonB.getVelocidad())
        {
            pokemonPrimeroAtacar = pokemonA;
            pokemonSegundoAtacar = pokemonB;
        } else {
            pokemonPrimeroAtacar = pokemonB;
            pokemonSegundoAtacar = pokemonA;
        }

        /** Bucle tipo while que compara las vidas de ambos pokemons, y va realizando los ataques y defensas de ambos a través de la funcion calculoDanios() */
        while(pokemonPrimeroAtacar.getVida() > 0 || pokemonSegundoAtacar.getVida() > 0)
        {
            console.log(`Turno ${i+1}: los tipos son ${pokemonPrimeroAtacar.getTipo()} vs ${pokemonSegundoAtacar.getTipo()}`);
            console.log(`El Pokémon ${pokemonPrimeroAtacar.getNombre()} realiza un ataque con poder ${pokemonPrimeroAtacar.getAtaque()}`);
            console.log(`El Pokémon ${pokemonSegundoAtacar.getNombre()} defiende con un poder de ${pokemonSegundoAtacar.getDefensa()}`);
            danio = this.calculoDanios(pokemonPrimeroAtacar.getTipo(), pokemonSegundoAtacar.getTipo(), pokemonPrimeroAtacar.getAtaque(), pokemonSegundoAtacar.getDefensa());
            console.log(`El daño realizado es de ${danio}`);
            pokemonSegundoAtacar.setVida(pokemonSegundoAtacar.getVida()-danio);

            console.log(`El Pokémon ${pokemonSegundoAtacar.getNombre()} realiza un ataque con poder ${pokemonSegundoAtacar.getAtaque()}`);
            console.log(`El Pokémon ${pokemonPrimeroAtacar.getNombre()} defiende con un poder de ${pokemonPrimeroAtacar.getDefensa()}`);
            danio = this.calculoDanios(pokemonSegundoAtacar.getTipo(), pokemonPrimeroAtacar.getTipo(), pokemonSegundoAtacar.getAtaque(), pokemonPrimeroAtacar.getDefensa());
            console.log(`El daño realizado es de ${danio}`);
            pokemonPrimeroAtacar.setVida(pokemonPrimeroAtacar.getVida()-danio);

            i++;            
        }

        /** Determina quien es el pokemon ganador */
        if(pokemonPrimeroAtacar.getVida() > pokemonSegundoAtacar.getVida())
        {
            pokemonGanador = pokemonPrimeroAtacar;
        } else {
            pokemonGanador = pokemonSegundoAtacar;
        }

        return pokemonGanador;
        
    }
}