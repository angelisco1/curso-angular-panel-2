import { Component, Input, OnInit } from '@angular/core';
import { IVendehumo } from 'src/app/types';

@Component({
  selector: 'vh-card-vendehumo',
  templateUrl: './card-vendehumo.component.html',
  styleUrls: ['./card-vendehumo.component.css']
})
export class CardVendehumoComponent implements OnInit {

  @Input() vendehumo: IVendehumo | null = null

  constructor() { }

  ngOnInit(): void {
  }

}
