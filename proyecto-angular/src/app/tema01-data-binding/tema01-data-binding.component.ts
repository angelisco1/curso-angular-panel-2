import { Component, OnInit } from '@angular/core';
import { ProductoType } from '../types/producto.types'


@Component({
  selector: 'app-tema01-data-binding',
  templateUrl: './tema01-data-binding.component.html',
  styleUrls: ['./tema01-data-binding.component.css']
})
export class Tema01DataBindingComponent implements OnInit {
  nombre: string = 'Ángel'
  visitante: string = ''
  private _nombre2: string = 'Charly'
  // string, number, boolean
  // Array<number> o number[]
  // {nombre: string, edad: number, dni: string}
  // any, undefined, null, never, unknown

  producto: ProductoType = {
    nombre: 'One Plus 9',
    precio: 500,
    stock: '15',
    urlImagen: 'https://www.powerplanetonline.com/cdnassets/oneplus_9_pro_04_verde_ad_l_l.jpg',
  }
  // nombreProducto: string = 'One Plus 9'
  // precio: number = 500
  // stock: number = 15

  get nombre2(): string {
    return this._nombre2
  }

  inputType: string = 'text'

  constructor() { }

  ngOnInit(): void {
  }

  getNombre(): string {
    return 'Sara'
  }

  mostrarIntroBatman(event: MouseEvent) {
    console.log({ event })
    const intro = new Array(16).join(NaN.toString()) + ' Batman!'
    console.log(intro)
  }

  // cambiarPrecioProducto(event: Event) {
  //   console.log({ event })
  //   // const eventTarget: EventTarget | null = event.target
  //   const eventTarget: HTMLInputElement | null = event.target as HTMLInputElement
  //   console.log({ eventTarget })
  //   if (eventTarget) {
  //     this.producto.precio = Number(eventTarget.value)
  //   }
  // }
  cambiarPrecioProducto(event: any) {
    this.producto.precio = Number(event.target.value)
  }

  comprarProducto() {
    if (this.producto.stock > 0) {
      this.producto.stock = Number(this.producto.stock) - 1
    }
  }

  resetNombre() {
    this.nombre = 'Ángel'
  }

  cambiarNombre(event: any) {
    this.nombre = event.target.value
  }

}
