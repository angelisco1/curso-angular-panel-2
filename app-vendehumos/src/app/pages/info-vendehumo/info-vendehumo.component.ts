import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { VendehumoModel } from 'src/app/models/vendehumo.model';
import { VendehumosService } from 'src/app/services/vendehumos.service';

@Component({
  selector: 'vh-info-vendehumo',
  templateUrl: './info-vendehumo.component.html',
  styleUrls: ['./info-vendehumo.component.css']
})
export class InfoVendehumoComponent implements OnInit {
  vendehumoInfo: VendehumoModel = new VendehumoModel()

  constructor(
    private vendehumosService: VendehumosService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        const vendehumoId = params.get('vendehumoId')

        if (vendehumoId) {
          this.vendehumosService.getVendehumo(vendehumoId)
            .subscribe((data: any) => {

              const { nombre, categoria, imagen, votos, id } = data
              this.vendehumoInfo = new VendehumoModel(nombre, categoria, imagen, votos, id)

            })
        }

      })
  }

}
