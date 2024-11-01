import { Routes } from '@angular/router';
import { TareaPageComponent } from './tarea/pages/tarea-page/tarea-page.component';
import { PadreComponent } from './components/input/padre/padre.component';
import { CharacterListComponentComponent } from './tp-input-output/character-list-component/character-list-component.component';
import { CharacterDetailComponentComponent } from './tp-input-output/character-detail-component/character-detail-component.component';
import { CharacterFormComponentComponent } from './tp-input-output/character-form-component/character-form-component.component';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { UpdateTareaPageComponent } from './tarea/pages/update-tarea-page/update-tarea-page.component';


//Esto es un array de rutas:
export const routes: Routes = [
{
  path: 'home',
  component: InicioPageComponent
},//Esto un objeto con un atributo que se llama path
{
  path:'',
  component: TareaPageComponent
},
{
  path: 'update/:id', //vamos a actualizar una tarea de un id determinado
  component: UpdateTareaPageComponent
},
{
  path:'padre', //Si ingreso en la ruta "padre"
  component: PadreComponent // renderiza al componente padre del tp(de la carpeta input)
},
{
  path: '**', //Si en el path hay cualquier cosa
  redirectTo:'' //Que me redireccione a home
},
{
  path: 'characters',
  component: CharacterListComponentComponent
},
{
  path: 'characters/:id',
  component: CharacterDetailComponentComponent
},
{
  path: 'add-character',
  component: CharacterFormComponentComponent
}

];
