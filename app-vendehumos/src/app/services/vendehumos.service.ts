import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { VendehumoModel } from '../models/vendehumo.model';


@Injectable({
  providedIn: 'root'
})
export class VendehumosService {

  constructor(private http: HttpClient) { }

  getVendehumos() {
    return this.http.get(environment.URL_API_VENDEHUMOS)
  }

  getVendehumo(vendehumoId: string) {
    return this.http.get(environment.URL_API_VENDEHUMOS + '/' + vendehumoId)
  }

  createVendehumo(nuevoVendehumo: VendehumoModel) {
    return this.http.post('http://localhost:3005/vendehumos', nuevoVendehumo, { headers: { 'Authorization': localStorage.getItem('token') || '' } })
  }

  updateVotosVendehumo(vendehumoId: string, votos: number) {
    const votosActualizados = { votos: votos + 1 }
    return this.http.patch(environment.URL_API_VENDEHUMOS + '/' + vendehumoId, votosActualizados)
  }
}
