import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VendehumoModel } from '../models/vendehumo.model';
import { IVendehumo } from '../types';


// TODO: esto hay que ponerlo en las variables del proyecto
const URL_API_VENDEHUMOS: string = 'http://localhost:3000/vendehumos'


@Injectable({
  providedIn: 'root'
})
export class VendehumosService {

  constructor(private http: HttpClient) { }

  getVendehumos() {
    return this.http.get(URL_API_VENDEHUMOS)
  }

  createVendehumo(nuevoVendehumo: VendehumoModel) {
    return this.http.post(URL_API_VENDEHUMOS, nuevoVendehumo)
  }

  updateVotosVendehumo(vendehumoId: string, votos: number) {
    const votosActualizados = { votos: votos + 1 }
    return this.http.patch(URL_API_VENDEHUMOS + '/' + vendehumoId, votosActualizados)
  }
}
