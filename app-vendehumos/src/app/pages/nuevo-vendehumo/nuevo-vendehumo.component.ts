import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VendehumoModel } from 'src/app/models/vendehumo.model';
import { VendehumosService } from 'src/app/services/vendehumos.service';

@Component({
  selector: 'vh-nuevo-vendehumo',
  templateUrl: './nuevo-vendehumo.component.html',
  styleUrls: ['./nuevo-vendehumo.component.css']
})
export class NuevoVendehumoComponent implements OnInit {
  formVendehumo: FormGroup

  constructor(private vendehumosService: VendehumosService, private router: Router) {

    this.formVendehumo = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      categoria: new FormControl('', [Validators.required]),
      imagen: new FormControl('https://xsgames.co/randomusers/assets/avatars/female/16.jpg', [Validators.required]),
    })

  }

  ngOnInit(): void {
  }

  guardarVendehumo() {
    // const vendehumo: IVendehumo = {
    //   nombre: 'C',
    //   votos: 0,
    //   categoria: 'trading',
    //   imagen: 'https://xsgames.co/randomusers/assets/avatars/female/13.jpg'
    // }
    // const vendehumo = new VendehumoModel('D', 'trading', 'https://xsgames.co/randomusers/assets/avatars/female/13.jpg')
    console.log(this.formVendehumo)
    // const nombre = this.formVendehumo.value.nombre
    // const imagen = this.formVendehumo.value.imagen
    // const categoria = this.formVendehumo.value.categoria

    // Desestructuración de objeto
    const { nombre, imagen, categoria } = this.formVendehumo.value

    const vendehumo = new VendehumoModel(nombre, categoria, imagen)
    this.vendehumosService.createVendehumo(vendehumo)
      .subscribe((data: any) => {
        console.log(data)
        this.router.navigateByUrl('/')
      })
  }

}
