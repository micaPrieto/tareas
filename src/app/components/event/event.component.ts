import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {

  contador:number =0;  //Es un atributo, segun lo que entendi

  contar(){
    this.contador++; //Por eso con el this lo modifico
  }

  cadena: string = '';
    //Lo que le carguemos en el input, se tiene que cargar en esta variable

  setCadena(eventoInput: any)
  {
    this.cadena = eventoInput.target.value
    //.target con esto accedo a ese elemento

  }

  cadenaChange: string = '';
  //Me toma la letra que este apretando
  changeCadena(eventoChange: any)
  {
    this.cadenaChange = eventoChange.target.value

  }

  key: string = '';
  //Carga lo que escribi luego de apretar enter
  setKey(event: any)
  {
    this.key = event.key

    if(this.key.includes('ArrowRight'))
    {
      this.correr();
    }
  }

  x: number = 0;
  correr(){
    this.x++;
  }
}


