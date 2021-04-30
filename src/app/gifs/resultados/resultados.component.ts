import { Component } from '@angular/core';

import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html'
})
export class ResultadosComponent {

  // Getter de la clase
  get resultados() {
    return this.gifsService.resultados;
  }

  // Constructor del servicio
  constructor( private gifsService: GifsService ) {}
}
