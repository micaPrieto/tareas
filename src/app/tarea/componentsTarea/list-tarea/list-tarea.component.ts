import { Component, inject, OnInit } from '@angular/core';
import { Tarea } from '../../interface/tarea.interface';
import { AddTareaComponent } from "../add-tarea/add-tarea.component";
import { TareaService } from '../../service/tarea.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-tarea',
  standalone: true,
  imports: [AddTareaComponent, RouterModule],
  templateUrl: './list-tarea.component.html',
  styleUrl: './list-tarea.component.css'
})

export class ListTareaComponent implements OnInit{

 // Método que se ejecuta al iniciar el componente.
  // Llama a listarTareas para cargar la lista de tareas al inicio.
  ngOnInit(): void { // ** JSON **
    this.listarTareas();
  }

  // Declaración de una lista de tareas que se mostrará en la vista.
  // Es un arreglo de objetos de tipo Tarea.
  listaTareas: Tarea[] = [];

  // Inyectamos el servicio TareaService en el componente usando la función inject().
  // Este servicio nos permite realizar operaciones de CRUD en las tareas.
  tareaService = inject(TareaService); // **** JSON ****

  // Método para agregar una nueva tarea a la lista de tareas.
  // Recibe una tarea como parámetro y la agrega al final del arreglo listaTareas.
  // Después el nombre se cambiará a "recibirTareaHijo" para recibir tareas desde un componente hijo.
  agregarLista(tarea: Tarea) {
    this.listaTareas.push({...tarea}); // Se usa el operador de propagación para crear una copia de la tarea.
  }


  // Método para listar todas las tareas usando el servicio tareaService.
  // Llama al método getTareas() del servicio, que devuelve un observable, al que nos suscribimos.
  listarTareas() // **** JSON ****
  {
    this.tareaService.getTareas().subscribe(
      {
        // Caso exitoso: Si se reciben las tareas correctamente, se asignan a listaTareas.
        next: (tareas: Tarea[]) => {
          this.listaTareas = tareas;
        },
        // Caso de error: Si ocurre un error al obtener las tareas, se imprime el mensaje en la consola.
        error: (error: Error) => {
          console.log(error.message);
        }
      }
    )
  }


  // Método para eliminar una tarea específica mediante su id.
  // Utiliza el servicio tareaService llamando al método deleteTareaById() para eliminar la tarea.
  eliminar(id: string) // **** JSON ****
  {
    this.tareaService.deleteTareaById(id).subscribe(
      {
        // Caso exitoso: Muestra un mensaje en la consola indicando que la tarea fue eliminada.
        next: () => {
          console.log('Tarea eliminada');
        },
        // Caso de error: Si ocurre un error al eliminar la tarea, se imprime el mensaje de error en la consola.
        error: (error: Error) => {
          console.log('Error al eliminar:', error.message);
        }
      }
    )
  }


}
