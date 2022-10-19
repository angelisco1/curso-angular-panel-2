import { Component, Input, OnInit } from '@angular/core';
import { ProductoType } from '../../types/producto.types'

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input() producto: ProductoType = {
    nombre: '',
    precio: 0,
    stock: '',
    urlImagen: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

  comprarProducto() {
    if (this.producto.stock > 0) {
      this.producto.stock = Number(this.producto.stock) - 1
    }
  }
}
