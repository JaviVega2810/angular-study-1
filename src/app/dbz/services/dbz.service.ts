import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()

export class DbzService{

    constructor(){}

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 100000
        },
        {
          nombre: 'Vegeta',
          poder: 98000
        },
        {
          nombre: 'Gohan',
          poder: 90000
        }
      ]

      get personajes(): Personaje[]{
        return [...this._personajes];
      }

      agregarPersonaje(arg: Personaje): void{
        this._personajes.push(arg);
      }

}