import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sugus',
  templateUrl: './sugus.component.html',
  styleUrls: ['./sugus.component.css']
})
export class SugusComponent implements OnInit {

  @Input() sabor: string = ''
  @Input() color: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
