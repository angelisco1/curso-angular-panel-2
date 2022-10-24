import { Component, OnInit } from '@angular/core';
import { VendehumosService } from 'src/app/services/vendehumos.service';
import { IVendehumo } from 'src/app/types';

@Component({
  selector: 'vh-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  listaVendehumos: Array<IVendehumo> = []

  // private vendehumosService: VendehumosService
  // constructor(vs: VendehumosService) {
  //   this.vendehumosService = vs
  // }
  constructor(private vendehumosService: VendehumosService) { }

  ngOnInit(): void {
    // Pedir la lista de datos e inicializar el listaVendehumos con ellos
    // this.vendehumosService.getVendehumos()
  }

}
