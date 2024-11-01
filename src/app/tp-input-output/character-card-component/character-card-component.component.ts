import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-character-card-component',
  standalone: true,
  imports: [],
  templateUrl: './character-card-component.component.html',
  styleUrl: './character-card-component.component.css'
})
export class CharacterCardComponentComponent {
//para emitir un evento al hacer clic en "Eliminar" o "Ver detalles", permitiendo al componente padre
//(“CharacterListComponent”) gestionar la eliminación o la navegación a la página de detalles.

@Input() // recibir personaje
personaje : string = '';

// @Output()
// emitirEvento = new EventEmitter<STRING>();


}
