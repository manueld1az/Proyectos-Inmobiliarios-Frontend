import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../../services/lugares.service';
import { MapaService } from '../../services/mapa.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  // le estás diciendo a TypeScript que estás seguro de que la propiedad (contenedorMapa) se inicializará antes de ser utilizada, a pesar de no tener un valor inicial en el constructor.
  contenedorMapa!: L.Map;

  constructor(
    private lugaresService: LugaresService,
    private mapaService: MapaService
  ) {}

  ngOnInit() {
    // Se agrega al listado de lugares marcados y al mapa la ubicación del usuario, si existe,
    // también para darle un nombre automáticamente al marcador inicial
    if (
      this.mapaService.lugaresMarcados[this.mapaService.lugaresMarcados.length-1].nombre != 'Esta por aquí' &&
      this.lugaresService.coordenadas
    ) {
      this.mapaService.lugaresMarcados.push({
        nombre: 'Su ubicación aproximada',
        coordenadas: this.lugaresService.coordenadas,
      });
    }
    // Usar las coordenadas del usuario para ubicar el primer centro del mapa
    this.contenedorMapa = L.map('contenedorMapa').setView(
      this.lugaresService.coordenadas as L.LatLngExpression,
      11
    );
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(this.contenedorMapa);

    // Se guarda el mapa en un servicio para tenerlo a disposición en el resto de la aplicación
    this.mapaService.setMapa(this.contenedorMapa);
    // se ponen en el mapa todos los marcadores que se hayan creado
    this.mapaService.lugaresMarcados.forEach((lugarMarcado) => {
      this.mapaService.crearMarcador(lugarMarcado);
    });
  }
}
