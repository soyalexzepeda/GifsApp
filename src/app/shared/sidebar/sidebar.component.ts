import { Component } from '@angular/core';

import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  // Getter de la clase
  get historial(): string[] {
    return this.gifsService.historial;
  }

  // Constructor del servicio
  constructor( private gifsService: GifsService ) {}

  // Método de busqueda de los términos
  buscar( termino: string ) {
    this.gifsService.buscarGifs(termino);
  }

}
