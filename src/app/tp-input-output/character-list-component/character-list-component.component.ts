import { Component } from '@angular/core';

@Component({
  selector: 'app-character-list-component',
  standalone: true,
  imports: [],
  templateUrl: './character-list-component.component.html',
  styleUrl: './character-list-component.component.css'
})
export class CharacterListComponentComponent {
//Muestra una lista de personajes de cómics. Utiliza un
//componente hijo “CharacterCardComponent” para cada personaje.
}
