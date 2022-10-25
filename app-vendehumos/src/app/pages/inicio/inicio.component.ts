import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { VendehumoModel } from 'src/app/models/vendehumo.model';
import { VendehumosService } from 'src/app/services/vendehumos.service';
import { IVendehumo } from 'src/app/types';

@Component({
  selector: 'vh-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  listaVendehumos: Array<VendehumoModel> = []

  // private vendehumosService: VendehumosService
  // constructor(vs: VendehumosService) {
  //   this.vendehumosService = vs
  // }
  constructor(private vendehumosService: VendehumosService) { }

  ngOnInit(): void {

    const miObservable = new Observable((subscriber: Subscriber<string>) => {
      setTimeout(() => {
        subscriber.next('Fulanito acaba de subir el video 1')
      }, 2000)

      setTimeout(() => {
        subscriber.next('Fulanito acaba de subir el video 2')
      }, 4000)

      setTimeout(() => {
        subscriber.next('Fulanito acaba de subir el video 3')
      }, 6000)
    })

    miObservable.subscribe((msg: string) => {
      console.log(msg)
    })

    // Pedir la lista de datos e inicializar el listaVendehumos con ellos
    this.vendehumosService.getVendehumos()
      .subscribe((vendehumos: any) => {
        this.listaVendehumos = vendehumos
      })
  }

}
