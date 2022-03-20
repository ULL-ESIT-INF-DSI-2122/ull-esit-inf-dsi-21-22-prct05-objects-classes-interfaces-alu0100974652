/**
 * Clase Pokemon que representa un pokemon
 * @class Pokemon 
 * @param nombre atributo nombre de la clase
 * @param peso atributo peso del pokemon
 * @param altura atributo altura del pokemon
 * @param tipo atributo tipo del pokemon
 * @param estadisticasBasicas atributo de estadísticas básicas en array (ataque, defensa, velocidad y vida)
 * 
 */

export class Pokemon
{
    private nombre: string;
    private peso: number;
    private altura: number;
    private tipo: string;
    private estadisticasBasicas = Array(4);

    constructor(nombre :string, peso :number, altura: number, tipo: string, estadisticasBasicas: number[]) 
    {
        this.nombre = nombre;
        this.peso = peso;
        this.altura = altura;
        this.tipo = tipo;
        this.estadisticasBasicas = estadisticasBasicas;
    }
}