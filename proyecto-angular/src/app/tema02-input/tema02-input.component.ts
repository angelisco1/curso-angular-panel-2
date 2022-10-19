import { Component, OnInit } from '@angular/core';
import { ProductoType } from '../types/producto.types';

@Component({
  selector: 'app-tema02-input',
  templateUrl: './tema02-input.component.html',
  styleUrls: ['./tema02-input.component.css']
})
export class Tema02InputComponent implements OnInit {

  sugusDeFresa = {
    sabor: 'fresa',
    color: 'red'
  }

  customSugus = {
    sabor: 'limón',
    color: '#ffff00',
  }

  onePlus9: ProductoType = {
    nombre: 'One Plus 9',
    precio: 500,
    stock: '15',
    urlImagen: 'https://www.powerplanetonline.com/cdnassets/oneplus_9_pro_04_verde_ad_l_l.jpg',
  }

  tomateFrito: ProductoType = {
    nombre: 'Tomate frito',
    precio: 1.35,
    stock: '300',
    urlImagen: 'https://www.hogarmania.com/archivos/201703/receta-salsa-tomate-668x400x80xX.jpg',
  }

  constructor() { }

  ngOnInit(): void {
  }

}

// Tipos de decoradores
// - De clase
// - De propiedad
// - De función
// - De parámetro