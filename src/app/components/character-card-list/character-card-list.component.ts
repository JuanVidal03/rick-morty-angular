import { Component, OnInit } from '@angular/core';
// servicion para el consumo de la api
import { CharactersService } from 'src/app/services/characters.service';
// modelo de los personajes
import { Character } from 'src/app/models/character.model';


@Component({
  selector: 'app-character-card-list',
  templateUrl: './character-card-list.component.html',
  styleUrls: ['./character-card-list.component.css']
})
export class CharacterCardListComponent implements OnInit{

  // donde se van a almacenar personajes
  personajes:Character[] = [];

  constructor(
    private characterService:CharactersService
  ){}
  
  // renderizar 
  ngOnInit() {
    this.characterService.getAllCharacters()
      .subscribe(characters =>
        this.personajes = characters
      )
  }
}
