import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tema04-pipes',
  templateUrl: './tema04-pipes.component.html',
  styleUrls: ['./tema04-pipes.component.css']
})
export class Tema04PipesComponent implements OnInit {

  nombre: string = 'charly falco'
  fechaNacimiento: Date = new Date(1958, 7, 3)
  descripcion: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloribus iusto ipsam debitis aperiam repellat laborum quasi minima nobis fugiat consequatur ipsa, ipsum laudantium numquam quisquam ducimus aliquam facere! Saepe.'
  precio: number = 3.5

  obj = {
    a: 1,
    b: 2,
    c: {
      d: 3
    }
  }

  listaUsuarios = fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())


  constructor() { }

  ngOnInit(): void {
  }

}
