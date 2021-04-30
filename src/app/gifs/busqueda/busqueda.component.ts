import { Component, ElementRef, ViewChild } from '@angular/core';

import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {

  // Lógica para capturar datos del input
  @ViewChild('txtBuscar') textBuscar!: ElementRef<HTMLInputElement>;

  // Constructor del servicio
  constructor( private gifsService: GifsService ) {}

  // Método de busqueda
  public buscar() {
    const valor = this.textBuscar.nativeElement.value;

    // Si el valor esta vacio 
    if(valor.trim().length === 0) {
      return;
    }

    // El resultado de la busqueda la asigna al parametro del servicio
    this.gifsService.buscarGifs(valor);
    this.textBuscar.nativeElement.value = '';
  }
}
