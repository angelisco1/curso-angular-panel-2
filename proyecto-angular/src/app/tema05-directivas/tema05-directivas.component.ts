import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tema05-directivas',
  templateUrl: './tema05-directivas.component.html',
  styleUrls: ['./tema05-directivas.component.css']
})
export class Tema05DirectivasComponent implements OnInit {
  darkModeActivado: boolean = false
  listaSugus = [
    { sabor: 'limón', color: 'yellow' },
    { sabor: 'piña', color: 'blue' },
    { sabor: 'naranja', color: 'orange' },
  ]

  listaIngresosGastos = [
    { concepto: 'Luz', cantidad: -150, fecha: new Date(2022, 8, 3) },
    { concepto: 'Sueldo', cantidad: 1800, fecha: new Date(2022, 8, 5) },
    { concepto: 'Burger King', cantidad: -26, fecha: new Date(2022, 8, 27) },
  ]

  listaIdiomas = [
    { codigo: 'es', texto: 'Español' },
    { codigo: 'it', texto: 'Italiano' },
    { codigo: 'fr', texto: 'Francés' },
  ]
  idiomaSeleccionado: string = 'it'

  constructor() { }

  ngOnInit(): void {
  }

  toggleDarkMode(activar: boolean) {
    this.darkModeActivado = activar
  }

}
