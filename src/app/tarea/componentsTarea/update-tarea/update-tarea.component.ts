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

 //OniInit es un evento que sucede en la creacion del componente, que se ejecuta cuando se carga la pagina
  //Cuando carga la pagina actualiza, quiero que se haga una busqueda y me traiga los datos de la tarea
  ngOnInit(): void
  {
    this.activatedRoute.paramMap.subscribe( //* NUEVO (de la mano con lo injectado abajo) *
      { // El Map retorna un observable, por lo cual siempre necesito subscrbirme
        next: (param) =>
        {
            this.id = param.get('id') // cargamos el atributo
            this.getTareaByIdLocal(this.id) //lo pasamos para hcer la busqueda
        },
        error: (e: Error) =>
        {
            console.log(e.message);
        }
      }
    )
  }
  activatedRoute = inject(ActivatedRoute); // * NUEVO *
  //Es para leer datos de una ruta, que las necesito leer para realizar la

  id:string | null = null // **NUEVO *
  //Puede ser un string o un null

  fb = inject(FormBuilder);
  tareaService = inject(TareaService);


  router = inject(Router);  //*NUEVO *
  // Para que cuando que apretemos el boton actualizar, me mueva de ruta a donde estaba



  formulario =this.fb.nonNullable.group(
    {
      id:['',[Validators.required] ],
      nombre:['',[Validators.required]]
    }
  );

  getTareaByIdLocal(id: string | null)
  {
    this.tareaService.getTareaById(id).subscribe(
      { //metodo que nos permite acceder a lo que nos retorna
        next: (tarea: Tarea) => { //Recibo la tarea
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

    const tarea = this.formulario.getRawValue() //accedemos a los datos del formulario

    this.tareaService.putTareas(tarea, this.id).subscribe(
      {
        next:() =>{  //metodo que nos permite acceder a lo que nos retorna
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
