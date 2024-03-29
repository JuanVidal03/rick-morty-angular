import { Injectable } from '@angular/core';
// para consumir la api
import { HttpClient } from '@angular/common/http';
// modelo de la api
import { CharacterDataApi } from '../models/characterDataApi.model';
import { Character } from '../models/character.model';
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
    const numeroAleatorio = Math.floor(Math.random() * 42) + 1;

    return this.http.get<CharacterDataApi>(`https://rickandmortyapi.com/api/character/?page=${numeroAleatorio}`)
      .pipe(
        map(res => res.results)
      );
  }

  // obteniendo personaje por id
  getCharacterById(id:number){
    return this.http.get<Character>(`https://rickandmortyapi.com/api/character/${id}`);
  } 
 
}
