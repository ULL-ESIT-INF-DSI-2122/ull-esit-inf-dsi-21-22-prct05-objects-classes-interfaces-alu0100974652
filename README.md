# Práctica 5 - Objetos, clases e interfaces
## _Desarrollo de Sistemas Informáticos_

En esta práctica se resolverán dos ejercicios de programación a través del uso de objetos, clases e interfaces.

## Algunas tareas previas
1. Aceptar la tarea de Github Classroom.
2. Comenzar a familiarizarse con los [principios Solid](https://samueleresca.net/solid-principles-using-typescript/)
3. Utilizar las herramientas [instanbul](https://istanbul.js.org/) y [coveralls](https://coveralls.io/), con la guia de vídeo proporcionada en el campus virtual.
4. Para esta práctica se alojarán dentro de la carpeta **/src** distintas subcarpetas con la resolución de los ejercicios.

## Ejercicio 1 - Pokédex
Para este ejercicio nos piden realizar una clase _Pokédex_ que almacene los datos de los distintos _Pokémons_, y que se simule un combate entre dos Pokémons con la función realizada en la [práctica 3, ejercicio 9](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-alu0100974652/blob/master/ejercicios/src/ejercicio-9.ts).


### Clase Pokémon
Para ello crearemos una clase **Pokémon** que será la base de este ejercicio.
Vamos a hablar primero de los atributos que tendrá nuestra clase: 
- Nombre: nombre del pokémon.
- Peso: peso del pokemon.
- Altura: altura del pokemon.
- Tipo: tipo del pokemon.
- Estadisticas Basicas: estadisticas basicas del pokemon en forma de array que representa un contenido como este: [ataque, defensa, velocidad, vida].
     */
```typescript
    private nombre: string;
    private peso: number;
    private altura: number;
    private tipo: string;
    private estadisticasBasicas = Array(4);
```

El constructor que hará que se pueda representar el objeto Pokémon será: 
```typescript
constructor(nombre :string, peso :number, altura: number, tipo: string, estadisticasBasicas: number[]) 
    {
        this.nombre = nombre;
        this.peso = peso;
        this.altura = altura;
        this.tipo = tipo;
        this.estadisticasBasicas = estadisticasBasicas;
    }
```

Luego vamos a ver los getters de la clase, estos métodos simplemente nos devuelven el valos de los atributos del objeto Pokémon:
```typescript
    public getNombre()
    {
        return this.nombre;
    }

    public getPeso()
    {
        return this.peso;
    }

    public getAltura()
    {
        return this.altura;
    }

    public getTipo()
    {
        return this.tipo;
    }

    public getAtaque()
    {
        return this.estadisticasBasicas[0];
    }

    public getDefensa()
    {
        return this.estadisticasBasicas[1];
    }

    public getVelocidad()
    {
        return this.estadisticasBasicas[2];
    }

    public getVida()
    {
        return this.estadisticasBasicas[3];
    }
```
Como vemos son métodos públicos de la clase para poder leer su valor de manera segura para otras clases. Tambien vemos como se ha divido el array de manera que retorna los valores correspondientes según el método requerido. 

Y por último deberemos añadir un método que nos permita cambiar el valor del atributo Vida para poder a llegar a simular el combate Pokémon, simplemente le pasamos el nuevo valor que tomará la vida:
```typescript
    public setVida(vida: number)
    {
        this.estadisticasBasicas[3] = vida;
    }
```

De esta forma los tests que deberemos comprobar son los getters y el setter de vida de un pokémon:ç
```typescript
describe('Pruebas para comprobar la clase Pokemon:', () => {
    const Bulbasaur = new Pokemon('Bulbasaur', 6.9, 0.7, 'Planta', [49, 49, 45, 45]);
    it('Test para saber el nombre del pokemon', () => {
        expect(Bulbasaur.getNombre()).to.be.eq('Bulbasaur');
    });

    it('Test para saber el peso del pokemon', () => {
        expect(Bulbasaur.getPeso()).to.be.eq(6.9);
    });

    it('Test para saber la altura del pokemon', () => {
        expect(Bulbasaur.getAltura()).to.be.eq(0.7);
    });
    
    it('Test para saber el tipo del pokemon', () => {
        expect(Bulbasaur.getTipo()).to.be.eq('Planta');
    });

    it('Test para saber el ataque del pokemon', () => {
        expect(Bulbasaur.getAtaque()).to.be.eq(49);
    });

    it('Test para saber la defensa del pokemon', () => {
        expect(Bulbasaur.getDefensa()).to.be.eq(49);
    });

    it('Test para saber la velocidad del pokemon', () => {
        expect(Bulbasaur.getVelocidad()).to.be.eq(45);
    });

    it('Test para saber la vida del pokemon', () => {
        expect(Bulbasaur.getVida()).to.be.eq(45);
    });

    const Bulbasaur1 = new Pokemon('Bulbasaur', 6.9, 0.7, 'Planta', [49, 49, 45, 45]);
    Bulbasaur1.setVida(34);
    it('Test para saber la vida del pokemon', () => {
        expect(Bulbasaur1.getVida()).to.be.eq(34);
    });
```

### Clase Pokédex
Para esta clase debemos necesitar Pokémons, con lo cual, importaremos la clase Pokemons a la clase Pokédex:
```typescript
import { Pokemon } from "./pokemon";
```
Y su único atributo será un array con los distintos Pokémons dentro de la Pokédex:
```typescript
private nPokemons: Pokemon[] = [];
```
Para el constructor de la clase será un array de Pokémons:
```typescript
constructor(nPokemons: Pokemon[]) 
    {
        this.nPokemons = nPokemons;
    };
```

Los métodos que tendrá la Pokédex será algo similar a la Pokédex de la serie original:
1. Pasar un número a la pokédex y decir que pokémon es.
2. Añadir un pokémon nuevo a la pokédex.
3. Eliminar un pokémon de la pokédex.
4. El tamaño de la pokédex en ese momento.
5. Buscar un pokémon por su nombre en la pokédex.

Se definirán el método junto sus tests para los siguientes pokemons y la siguiente pokedex creada:
```typescript
const Bulbasaur = new Pokemon('Bulbasaur', 6.9, 0.7, 'Planta', [49, 49, 45, 45]);
    const Charmander = new Pokemon('Charmander', 8.5, 0.6, 'Fuego', [52,43,65,39]);
    const Squirtle = new Pokemon('Squirtle', 9, 0.5, 'Agua', [46,65,43,44]);
    const Pikachu = new Pokemon('Pikachu',6,0.4,'Electrico',[55,40,90,35]);

    const PokedexKanto = new Pokedex([Bulbasaur, Charmander]);
```

Para el primer método se define la siguiente función getter:
```typescript
public getPokemonPosition(position: number)
    {
        return this.nPokemons[position];
    }

it('Comprobando si se puede acceder a la Pokedex', () => {
        expect(PokedexKanto.getPokemonPosition(1)).to.be.eq(Charmander);
    });
```
Para el segundo método se define la función addPokemon, esta añadirá al pokémon al final de la pokédex:
```typescript
public addPokemon(nuevoPokemon: Pokemon)
    {
        this.nPokemons.push(nuevoPokemon);
    }

it('Se puede añadir un nuevo Pokeon a la Pokedex', () => {
        PokedexKanto.addPokemon(Squirtle);
        expect(PokedexKanto.getPokemonPosition(2)).to.be.eq(Squirtle);
    });
```

Para el tercer método se define la función deletePokemon, en esta se hace uso de un método que se explicará en el 5 apartado que será el searchPokemon. Simplemente si el primer condicional devuelve true entra en el bucle y busca el pokemon y lo elimina a través del uso de métodos de arrays con splice(). El test será ver el tamaño final de la pokédex, pasa de 3 a 2.
```typescript
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

it('Se puede eliminar un Pokemon de la Pokedex', () => {
        PokedexKanto.deletePokemon(Bulbasaur);
        expect(PokedexKanto.tamanioPokedex()).to.be.eq(2);
    })
```

Para el cuarto método siemplemente devuelve el tamaño del vector de Pokémons:
```typescript
public tamanioPokedex()
    {
        return this.nPokemons.length;
    }
```

Para el último método searchPokemon, se utiliza un booleano que retornará true o  false en caso de que encuentre o no al pokemon deseado. Recorre el vector de Pokémons y si lo encuentra devuelve true:
```typescript
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

it('Se puede buscar un Pokemon en la Pokedex', () => {
        expect(PokedexKanto.searchPokemon(Bulbasaur)).to.be.eq(true);
        expect(PokedexKanto.searchPokemon(Pikachu)).to.be.eq(false);
    });
```

### Clase Combat
Para esta clase necesitaremos importar la clase Pokemon para poder representar un combate Pokémon.
```typescript
private pokemon1: Pokemon;
private pokemon2: Pokemon;

constructor(pokemon1: Pokemon, pokemon2: Pokemon) 
    {
        this.pokemon1 = pokemon1;
        this.pokemon2 = pokemon2;
    };
```
Esta clase contendrá los siguientes métodos:
1. Método para calcular los daños, que será la función realizada en la [práctica 3, ejercicio 9](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-alu0100974652/blob/master/ejercicios/src/ejercicio-9.ts).
2. Método start que simula un combate Pokémon.

Para el primer método será la misma utilizada en la práctica anterior, recibe los parámetros necesarios para realizar la operación del cálculo:
```typescript
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

it('Comprobar el metodo calculodeDanios', () => {
        const calculoDeDanios = new Combat(Bulbasaur, Squirtle);
        expect(calculoDeDanios.calculoDanios(Bulbasaur.getTipo(), Squirtle.getTipo(), Bulbasaur.getAtaque(), Squirtle.getDefensa())).to.be.eq(75.38461538461539);
    });

```

Para el último método deberemos pasar como parámetro a los dos pokémons a enfrentar.
```typescript
start(pokemonA: Pokemon, pokemonB: Pokemon)
```
Luego necesitaremos determinar qué Pokémon empieza a atacar y el otro defiende, para ello, según el juego original se basa en la estadística básica de velocidad de cada pokemon. Con lo cual crearemos dos variables "auxiliares" pokemons para determinar el primero en atacar y el segundo, junto con el condicional requerido (también se muestra un mensaje):
```typescript
let pokemonPrimeroAtacar: Pokemon;
let pokemonSegundoAtacar: Pokemon;

console.log(`Vamos a conocer quien es el primer Pokémon en empezar en base a su velocidad:`);

if(pokemonA.getVelocidad() > pokemonB.getVelocidad())
{
            pokemonPrimeroAtacar = pokemonA;
            pokemonSegundoAtacar = pokemonB;
} else {
            pokemonPrimeroAtacar = pokemonB;
            pokemonSegundoAtacar = pokemonA;
}
```

Un combate Pokémon termina cuando uno de los dos Pokémons no puede seguir combatiendo, es decir, la vida del Pokémon llega a 0, como se basa en un juego por turnos, el pokemon que ataque de primeras luego le tocará defender el ataque del segundo pokemon. Para ello realizaremos un bucle while con la condición de vida de cada uno de los Pokémons. Mostrando un mensaje del turno en el que se encuentra, el tipo de cada uno de los Pokémons, el ataque y la defensa de cada uno de los pokémons.

```typescript
/** Contador de turnos */
let i: number  = 0;

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
```

El test serán los siguientes:
```typescript
    const Bulbasaur = new Pokemon('Bulbasaur', 6.9, 0.7, 'Planta', [49, 49, 45, 45]);
    const Charmander = new Pokemon('Charmander', 8.5, 0.6, 'Fuego', [52,43,65,39]);
    const Squirtle = new Pokemon('Squirtle', 9, 0.5, 'Agua', [46,65,43,44]);
    const Pikachu = new Pokemon('Pikachu',6,0.4,'Electrico',[55,40,90,35]);

    it('Combate Bulbasaur vs Squirtle = Ganador Bulbasaur', () => {
        const primerCombate = new Combat(Bulbasaur, Squirtle);
        expect(primerCombate.start(Bulbasaur, Squirtle)).to.be.eq(Bulbasaur);
    });

    it('Combate Charmander vs Pikachu = Ganador Charmander', () => {
        const segundoCombate = new Combat(Charmander, Pikachu);
        expect(segundoCombate.start(Charmander, Pikachu)).to.be.eq(Charmander);
    });
```
Y el resultado por pantalla será algo similar a esto:
``` 
Vamos a conocer quien es el primer Pokémon en empezar en base a su velocidad:
Turno 1: los tipos son Planta vs Agua
El Pokémon Bulbasaur realiza un ataque con poder 49
El Pokémon Squirtle defiende con un poder de 65
El daño realizado es de 75.38461538461539
Vida Restante de Bulbasaur es 45
Vida Restante de Squirtle es -31.384615384615387
El Pokémon Squirtle realiza un ataque con poder 46
El Pokémon Bulbasaur defiende con un poder de 49
El daño realizado es de 23.46938775510204
Vida Restante de Bulbasaur es 21.53061224489796
Vida Restante de Squirtle es -31.384615384615387
Turno 2: los tipos son Planta vs Agua
El Pokémon Bulbasaur realiza un ataque con poder 49
El Pokémon Squirtle defiende con un poder de 65
El daño realizado es de 75.38461538461539
Vida Restante de Bulbasaur es 21.53061224489796
Vida Restante de Squirtle es -106.76923076923077
El Pokémon Squirtle realiza un ataque con poder 46
El Pokémon Bulbasaur defiende con un poder de 49
El daño realizado es de 23.46938775510204
Vida Restante de Bulbasaur es -1.9387755102040813
Vida Restante de Squirtle es -106.76923076923077
    ✔ Combate Bulbasaur vs Squirtle = Ganador Bulbasaur
Vamos a conocer quien es el primer Pokémon en empezar en base a su velocidad:
Turno 1: los tipos son Electrico vs Fuego
El Pokémon Pikachu realiza un ataque con poder 55
El Pokémon Charmander defiende con un poder de 43
El daño realizado es de 127.90697674418605
Vida Restante de Pikachu es 35
Vida Restante de Charmander es -88.90697674418605
El Pokémon Charmander realiza un ataque con poder 52
El Pokémon Pikachu defiende con un poder de 40
El daño realizado es de 130
Vida Restante de Pikachu es -95
Vida Restante de Charmander es -88.90697674418605
```

## Ejercicio 2 - Conecta 4
Se nos pide realizar el juego de conecta 4.