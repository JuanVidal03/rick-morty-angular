import { Component, Input } from '@angular/core';
// modelo del personaje
import { Character } from 'src/app/models/character.model';


@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent {

  // personajes que vienen desde character-card-list
  @Input() personaje!:Character;

}
