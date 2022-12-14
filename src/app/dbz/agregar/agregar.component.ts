import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})

export class AgregarComponent{

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private _dbzService: DbzService){}

  agregar(): void{
    if(this.nuevo.nombre.trim().length === 0 && this.nuevo.poder === 0)
    {
      return;
    }

    this._dbzService.agregarPersonaje(this.nuevo);
    
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
