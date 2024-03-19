import { Component, OnInit } from '@angular/core';
// servicio de la api
import { CharactersService } from 'src/app/services/characters.service';
// modelo del personaje
import { Character } from 'src/app/models/character.model';
// para obtener el id que es ta en la url
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single-character',
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.css']
})
export class SingleCharacterComponent implements OnInit {

  constructor(
    private characterService:CharactersService,
    private characterId:ActivatedRoute
  ){}
  
  // personaje a renderizar
  personaje!:Character;
  // ide del personaje en la url
  idPersonaje!:any;

  ngOnInit() {
    // obteniendo el id del personaje a buscar en la url
    this.characterId.paramMap.subscribe(param => {
      this.idPersonaje = param.get('id');
    })

    // obteniendo el personaje de la api
    this.characterService.getCharacterById(this.idPersonaje).subscribe(character => {
      this.personaje = character;
    })
  }
  
}