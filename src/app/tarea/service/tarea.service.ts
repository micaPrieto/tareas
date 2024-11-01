import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from '../interface/tarea.interface';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
}) //@injectable: hace que este servicio, con esta configuracin y este objeto, el provideIn en el root, es
// accesible desde cualquier parte de la aplicación. Lo puedo injectar desde cualquier lado

export class TareaService {
  // Crea una sola instancia de TareaService, no importa que lo esten usando 10 componentes, solo va a hacer una sola instancia
  //constructor(private http: HttpClient) { }
  //Otra forma de hacerlo:
   http = inject(HttpClient);  //-> (Este es para cuando lo llamo, la opcion del constructor es para cuando se instancia)

    //urlBase: string= 'http://localhost:3000/tareas'
    urlBase = environment.urlBase;

    getTareas(): Observable<Tarea[]> //Accedo a un array de tareas
    { // Con los : le digo el tipo de dato que voy a retorna, que es un observable de array de tareas
      return this.http.get<Tarea[]>(this.urlBase);
    }

    getTareaById(id: string | null): Observable<Tarea> //Accedo a un array de tareas
    { // Con los : le digo el tipo de dato que voy a retorna, que es un observable de array de tareas
      return this.http.get<Tarea>( `${this.urlBase}/${id}` );
    }

    putTareas(tarea: Tarea, id: string | null): Observable<Tarea> //Inserto una tarea
    {
      return this.http.put<Tarea>(`${this.urlBase}/${id}`, tarea);
    }

    postTareas(tarea: Tarea): Observable<Tarea> //Inserto una tarea
    {
      return this.http.post<Tarea>(this.urlBase, tarea);
    }

    deleteTareaById(id:string): Observable<void> //Accedo a un array de tareas
    { // Con los : le digo el tipo de dato que voy a retorna, que es un observable de array de tareas
      return this.http.delete<void>( `${this.urlBase}/${id}` );
    }

    //Observable: hay algo que esta siendo observado por otras personas que se han subcritos a ese servicio,
    // que pueden escuchar los cambios en esos observables
    //Van a haber observadores que van a observar los cambios en las tareas

}
