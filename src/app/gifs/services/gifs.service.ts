import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  
  // Propiedades de la clase
  private urlService = 'https://api.giphy.com/v1/gifs';
  private apiKey: string = 'wLWaBJiA3e0ARuLuAC40sGK09Z6w3PJb';
  private _historial: string[] = [];
  public resultados: Gif[] = [];

  // Getter de la clase
  get historial(): string[] {
    return [...this._historial];
  }

  // Constructor que muestra los valores del localStorage
  constructor( private http: HttpClient ) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  // Método de busqueda de Gifs
  buscarGifs( query: string ) {

    // Los resultados los convierte en minúsculas
    query = query.trim().toLowerCase();

    // Si los resultados de busqueda no existen
    if( !this._historial.includes(query) ) {
      
      // Agrega el último resultado
      this._historial.unshift(query);

      // Solo deja los primeros 10 valores
      this._historial = this._historial.splice(0, 10);

      // Guarda el resultado en el localStorage
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    // Parametros del servicio Http
    const params = new HttpParams()
          .set('api_key', this.apiKey)
          .set('q', query)
          .set('limit', '10');

    // Lógica del busqueda del servicio
    this.http.get<SearchGifsResponse>(`${ this.urlService }/search`, { params })
              .subscribe((res) => {
                this.resultados = res.data;
                localStorage.setItem('resultados', JSON.stringify(this.resultados));
              })
  }
}
