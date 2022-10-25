import { Component, Input, OnInit } from '@angular/core';
import { VendehumoModel } from 'src/app/models/vendehumo.model';
import { VendehumosService } from 'src/app/services/vendehumos.service';
import { IVendehumo } from 'src/app/types';

@Component({
  selector: 'vh-card-vendehumo',
  templateUrl: './card-vendehumo.component.html',
  styleUrls: ['./card-vendehumo.component.css']
})
export class CardVendehumoComponent implements OnInit {

  @Input() vendehumo: VendehumoModel = new VendehumoModel()

  constructor(private vendehumosService: VendehumosService) { }

  ngOnInit(): void {
  }

  votar() {
    const id = this.vendehumo.id!
    const votos = this.vendehumo.votos
    this.vendehumosService.updateVotosVendehumo(id, votos)
      .subscribe((data: any) => {
        console.log(data)
        this.vendehumo.votos = data.votos
      })
  }

}
