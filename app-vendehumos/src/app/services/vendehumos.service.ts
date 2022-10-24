import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendehumosService {

  constructor() { }

  getVendehumos() {
    return [
      {
        id: 'id1',
        nombre: 'A',
        categoria: 'crypto',
        imagen: 'https://xsgames.co/randomusers/assets/avatars/male/16.jpg',
        votos: 3
      },
      {
        id: 'id2',
        nombre: 'B',
        categoria: 'desarrollo-personal',
        imagen: 'https://xsgames.co/randomusers/assets/avatars/male/56.jpg',
        votos: 6
      },
    ]
  }
}
