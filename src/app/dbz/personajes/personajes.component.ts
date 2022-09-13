import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent{

  constructor(private _dbzservice: DbzService){}

  get personajes() {
    return this._dbzservice.personajes;
  }

}
