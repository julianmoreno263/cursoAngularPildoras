import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {

  //propiedades para  la interpolacion
  nombre="juan"
  apellido="perez"
  edad=22
  //empresa="pildoras informaticas"

  //getter si el campo edad es private
  // getEdad(){
  //   return this.edad
  // }

 

}
