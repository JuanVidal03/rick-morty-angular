import { Injectable } from '@angular/core';
// para consumir la api
import { HttpClient } from '@angular/common/http';
// modelo de la api
import { CharacterDataApi } from '../models/characterDataApi.model';
// filtramos los datos que queremos enviar al consumo
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    private http: HttpClient
  ){}

  // obteniendo todos los personajes, aqui solo estoy obteniendo el resultado con el array de los personajes
  getAllCharacters(){
    return this.http.get<CharacterDataApi>('https://rickandmortyapi.com/api/character')
      .pipe(
        map(res => res.results)
      );
  }
}
