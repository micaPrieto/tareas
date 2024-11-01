import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TareaService } from '../../service/tarea.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarea } from '../../interface/tarea.interface';

@Component({
  selector: 'app-update-tarea',
  standalone: true,
  imports: [ReactiveFormsModule], //**NO OLVIDAR */
  templateUrl: './update-tarea.component.html',
  styleUrl: './update-tarea.component.css'
})
export class UpdateTareaComponent implements OnInit {

 //OniInit cuando carga la pagina actualiza
  ngOnInit(): void
  {//Siempre que usamos un observable (paranMap en este caso), tenemos que poner el next
    this.activatedRoute.paramMap.subscribe( //* NUEVO (de la mano con lo injectado abajo) *
      {
        next: (param) =>
        {
            this.id = param.get('id') // acá lo agrego al atributo id que esta abajo
            this.getTareaById(this.id)
        },
        error: (e: Error) =>
        {
            console.log(e.message);
        }
      }
    )
  }



  id:string | null = null // **NUEVO *
  //Puede ser un string o un null

  fb = inject(FormBuilder);
  tareaService = inject(TareaService);

  activatedRoute = inject(ActivatedRoute); // * NUEVO *
  router = inject(Router); // Para que cuando que apretemos el boton actualizar, me mueva de ruta



  formulario =this.fb.nonNullable.group(
    {
      id:['',[Validators.required] ],
      nombre:['',[Validators.required]]
    }
  );

  getTareaById(id: string | null)
  {
    this.tareaService.getTareaById(id).subscribe(
      {
        next: (tarea: Tarea) => {
          this.formulario.controls['id'].setValue(tarea.id)
          this.formulario.controls['nombre'].setValue(tarea.nombre)
        },
        error: () =>{
          console.log('Error...');
        }
      }
    )
  }


  update()
  {
    if(this.formulario.invalid) return;

    const tarea = this.formulario.getRawValue()

    this.tareaService.putTareas(tarea, this.id).subscribe(
      {
        next:() =>{
          this.router.navigateByUrl('') //este router es un atributo que declare arriba
          // Para que cuando que apretemos el boton actualizar, me mueva de ruta al inicio
          console.log('Actualizando...');
        },
        error:() =>{
          console.log('Error al actualizar');
        }
      }
    )
  }



}
