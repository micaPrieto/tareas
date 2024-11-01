import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventComponent } from "./components/event/event.component";
import { ProductosComponent } from './components/productos/productos.component';
import { PropertyComponent } from './components/property/property.component';
import { NgforComponent } from './components/directivas/ngfor/ngfor.component';
import { TareaPageComponent } from './tarea/pages/tarea-page/tarea-page.component';
import { ListTareaComponent } from './tarea/componentsTarea/list-tarea/list-tarea.component';
import { PadreComponent } from './components/input/padre/padre.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({ //Es un decorador,una funcion, lo que hace es aportar funcionalidad
  selector: 'app-root', //es lo que se renderiza en el index.html
  standalone: true,
  imports: [
    RouterOutlet,
    EventComponent,
    ProductosComponent,
    PropertyComponent,
    NgforComponent,
    TareaPageComponent,
    PadreComponent,
    NavbarComponent
  ], // lo que necesito para que ese componente funcione
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' //Para darle estilos a este compenente, usa este css. Si quiero puedo linkear otro css.
})


export class AppComponent {
  title = 'ACÁ LO MODIFIQUE';
}
