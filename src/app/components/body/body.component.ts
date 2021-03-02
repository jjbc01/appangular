import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  cita: any = {
    cita: 'No pienso nunca en el futuro',
    autor: ' Albert Einstein'
  };
  textoDelBoton = 'Ocultar Cita';

  autores: string[] = ['Aristóteles', 'Einstein', 'San Agustín', 'Platón'];

  citaVisible = true;

  constructor() { }

  ngOnInit(): void {
  }

  ocultaMuestraCita() {
    this.citaVisible = !this.citaVisible;
    if (this.citaVisible) {
      this.textoDelBoton = 'Ocultar Cita';
    } else {
      this.textoDelBoton = 'Mostrar Cita';
    }
  }
}
