import { Component, OnInit } from '@angular/core';
// servicio de la api
import { CharactersService } from 'src/app/services/characters.service';
// modelo del personaje
import { Character } from 'src/app/models/character.model';


@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

  constructor(
    private characterService: CharactersService
  ){}
  
  // aqui se van a almacener los personajes traidos de la api
  personajes:Character[] = [];

  // mostrando la data de primero
  ngOnInit() {
      this.characterService.getAllCharacters()
        .subscribe(characters => {
          console.log(characters);
          this.personajes = characters;
        })
  }

}
