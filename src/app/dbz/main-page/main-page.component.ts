import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{

  personajes: Personaje[] = [
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

  nuevo: Personaje ={
    nombre: '',
    poder: 0
  }

  agregar(): void{
    if(this.nuevo.nombre.trim().length === 0 && this.nuevo.poder === 0)
    {
      return;
    }
    this.personajes.push(this.nuevo);
    
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
