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

  ngOnInit(): void { // ** JSON **
   this.listarTareas();
  }

  listaTareas: Tarea [] = []

  tareaService = inject(TareaService); // ** JSON **

  agregarLista(tarea: Tarea){ //Despues le cmabio el nombre a "recibirTareaHijo"
    this.listaTareas.push({...tarea});
  }

  listarTareas() // ** JSON **
  {
    this.tareaService.getTareas().subscribe(
      {
        next : (tareas: Tarea[]) =>
        {
          this.listaTareas = tareas
        },
        error: (error:Error) =>
        {
          console.log(error.message);
        }
      }
    )
  }

  delete(id: string){
    this.tareaService.deleteTareaById(id).subscribe (
      {
        next:()=>
          {
            console.log('Tarea eliminada');
          },
        error: (error: Error) =>
          {
            console.log('Error al eliminar:', error.message);
          }
      }
    )
  }






}
