import { Component } from '@angular/core';
import { LugaresService } from '../../services/lugares.service';
import { MapaService } from '../../services/mapa.service';

@Component({
  selector: 'app-boton-reubicar',
  templateUrl: './boton-reubicar.component.html',
  styleUrls: ['./boton-reubicar.component.css'],
})
export class BotonReubicarComponent {
  constructor(
    private lugaresService: LugaresService,
    private mapaService: MapaService
  ) {}

  reubicarCentro() {
    if (!this.lugaresService.coordenadasListas)
      throw Error('No hay coordenadas de usuario');
    if (!this.mapaService.mapaListo) throw Error('No esta listo el mapa');

    this.mapaService.reubicar(this.lugaresService.coordenadas!);
  }
}
