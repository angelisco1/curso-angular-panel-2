import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendehumoModel } from 'src/app/models/vendehumo.model';
import { VendehumosService } from 'src/app/services/vendehumos.service';
import { IVendehumo } from 'src/app/types';

@Component({
  selector: 'vh-nuevo-vendehumo',
  templateUrl: './nuevo-vendehumo.component.html',
  styleUrls: ['./nuevo-vendehumo.component.css']
})
export class NuevoVendehumoComponent implements OnInit {

  constructor(private vendehumosService: VendehumosService, private router: Router) { }

  ngOnInit(): void {
  }

  guardarVendehumo() {
    // const vendehumo: IVendehumo = {
    //   nombre: 'C',
    //   votos: 0,
    //   categoria: 'trading',
    //   imagen: 'https://xsgames.co/randomusers/assets/avatars/female/13.jpg'
    // }
    const vendehumo = new VendehumoModel('D', 'trading', 'https://xsgames.co/randomusers/assets/avatars/female/13.jpg')
    this.vendehumosService.createVendehumo(vendehumo)
      .subscribe((data: any) => {
        console.log(data)
        this.router.navigateByUrl('/')
      })
  }

}
