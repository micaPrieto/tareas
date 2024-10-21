import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  standalone: true,
  imports: [CommonModule],
  //Este modulo es para el ngForce
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.css'
})

export class NgforComponent {
  //array de estudiantes:
  estudiantes = [
    { id: 1, nombre: 'Maria'},
    { id: 2, nombre: 'Juan'},
    { id: 3, nombre: 'Micaela'},
    { id: 4, nombre: 'Martin'},
  ]

  color ='verde';

}
