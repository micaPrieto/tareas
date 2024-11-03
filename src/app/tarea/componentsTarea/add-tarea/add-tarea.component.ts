import { Tarea } from './../../interface/tarea.interface';

import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder,ReactiveFormsModule, Validators,FormsModule } from '@angular/forms';
import { ReturnStatement } from '@angular/compiler';
import { TareaService } from '../../service/tarea.service';

@Component({
  selector: 'app-add-tarea',
  standalone: true,
  imports: [ReactiveFormsModule], //TENEMOS QUE IMPORTAR ESTO
  templateUrl: './add-tarea.component.html',
  styleUrl: './add-tarea.component.css'
})

export class AddTareaComponent {

  @Output() //Decorador q define un EVENTO que el componente hijo pueda emitir al componente padre.
  emitirTarea: EventEmitter<Tarea> = new EventEmitter();
  //Define una instancia de EventEmitter que emitirá objetos del tipo Tarea.

  fb = inject(FormBuilder)
//Injectamos el FormBuilder en una variable, el cual ayuda a construir el formulario

tareaService= inject(TareaService); // **JSON**
// injecto nuestro servicio


  // Definición del formulario reactivo:
formulario = this.fb.nonNullable.group( // Entre parentesis va a ir un objeto que va a contener los campos del formulario
    {
      // Campo `id`: Inicializado en 0, y tiene una validación para ser obligatorio.
      id: ['', [Validators.required]],

      // Campo `nombre`: Inicializa vacío y se valida como obligatorio y con un mínimo de 3 caracteres
      nombre: ['', [Validators.required, Validators.minLength(3)]]
    }
  );
//nonNullable: no permite datos null


 // Función para agregar tarea (emitir datos si el formulario es válido)
  addTarea()
  {
    if(this.formulario.invalid) // Si el formulario es inválido..
      {
        return; // me corta la función acá, no emite la tarea
      }

    const tarea = this.formulario.getRawValue()
    //Si el formulario es valido, lo agregamos a una constante

    this.addTareaDB(tarea);  /** JSON*/
    //Llamamos a la funcion que llama al post y se subscribe

    this.emitirTarea.emit(tarea);// emitimos ese valor

  }


  addTareaDB(tarea: Tarea) //*JSON *
  {//Esto se transforma en un observador. Se subscribe al servicio
    //para poder agregar a la base de datos
    this.tareaService.postTareas(tarea).subscribe(
      {
          next: (tarea : Tarea) => {
            console.log(tarea);
              alert('Tarea guardada')

          },
          error: (error: Error) => {
            console.log(error.message);
          }
      }
    )

  }



}
